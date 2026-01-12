import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Productpage = () => {
  return (
    <div className="p-5 border  bg-red-500 rounded xl">
      <h1 className="text bg-red-500 p-5">products page</h1>
      <Button>FSW 7.0</Button>
      <Input placeholder="bora fechar esse projeto!" />
    </div>
  );
};

export default Productpage;
