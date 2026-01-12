import { Button } from "@/components/ui/button";

const ProductPage = () => {
  return (
    <div className="p-5 border border-red-500 rounded-xl">
      <h1 className="text-red-500">Products page</h1>
      {/* USE MAIÚSCULO AQUI EMBAIXO */}
      <Button>FSW 7.0</Button>
      <Input placeholder="Bora fechar esse projeto!" />
    </div>
  );
};

export default ProductPage;
