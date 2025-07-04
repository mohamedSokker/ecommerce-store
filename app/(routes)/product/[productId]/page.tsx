import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Contanier from "@/components/ui/container";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const resolvedParams = await params;
  const { productId } = resolvedParams;

  const product = await getProduct(productId);
  const suggestedProduct = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Contanier>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info */}
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProduct} />
        </div>
      </Contanier>
    </div>
  );
};

export default ProductPage;
