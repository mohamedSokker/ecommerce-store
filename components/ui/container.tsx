interface ContainerProps {
  children: React.ReactNode;
}

const Contanier: React.FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Contanier;
