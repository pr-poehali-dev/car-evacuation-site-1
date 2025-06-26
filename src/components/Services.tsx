import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      icon: "Car",
      title: "Эвакуация легковых авто",
      description:
        "Безопасная транспортировка легковых автомобилей любых марок",
      price: "от 2500 ₽",
    },
    {
      icon: "Truck",
      title: "Эвакуация грузовых авто",
      description:
        "Специализированная эвакуация грузовиков и коммерческого транспорта",
      price: "от 4500 ₽",
    },
    {
      icon: "Wrench",
      title: "Техпомощь на дороге",
      description: "Запуск двигателя, замена колеса, разблокировка замков",
      price: "от 1500 ₽",
    },
    {
      icon: "MapPin",
      title: "Эвакуация с паркинга",
      description: "Вызволение из сложных парковочных ситуаций",
      price: "от 3000 ₽",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Наши услуги</h2>
          <p className="text-xl text-gray-600">
            Профессиональная эвакуация и техпомощь
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-red-500"
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={24}
                    className="text-red-600"
                  />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-red-600">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
