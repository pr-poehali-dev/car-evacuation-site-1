import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-red-600 to-orange-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Эвакуатор 24/7</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Быстрая подача • Круглосуточно • Легковые и грузовые авто
        </p>

        <div className="mb-10">
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6 h-auto font-bold shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="Phone" size={24} className="mr-2" />
            Вызвать эвакуатор
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon name="Clock" size={32} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">24/7</h3>
            <p className="opacity-90">Работаем круглосуточно без выходных</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon name="Zap" size={32} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Быстро</h3>
            <p className="opacity-90">Подача эвакуатора за 15-30 минут</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Icon name="Truck" size={32} className="mx-auto mb-3" />
            <h3 className="text-lg font-semibold mb-2">Любые авто</h3>
            <p className="opacity-90">Легковые и грузовые автомобили</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
