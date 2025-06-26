import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 text-gray-800 py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='53' cy='7' r='1'/%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          Эвакуатор 24/7
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-700">
          Быстрая подача • Круглосуточно • Легковые и грузовые авто
        </p>

        <div className="mb-10">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 text-xl px-8 py-6 h-auto font-bold shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <Icon name="Phone" size={24} className="mr-2" />
            Вызвать эвакуатор
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm">
            <Icon
              name="Clock"
              size={32}
              className="mx-auto mb-3 text-blue-600"
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">24/7</h3>
            <p className="text-gray-700">Работаем круглосуточно без выходных</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm">
            <Icon name="Zap" size={32} className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Быстро</h3>
            <p className="text-gray-700">Подача эвакуатора за 15-30 минут</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border border-blue-100 shadow-sm">
            <Icon
              name="Truck"
              size={32}
              className="mx-auto mb-3 text-blue-600"
            />
            <h3 className="text-lg font-semibold mb-2 text-gray-900">
              Любые авто
            </h3>
            <p className="text-gray-700">Легковые и грузовые автомобили</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
