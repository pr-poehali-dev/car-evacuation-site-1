import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  const features = [
    {
      icon: "Shield",
      title: "Опыт 10+ лет",
      description: "Надежная работа на рынке эвакуаторных услуг",
    },
    {
      icon: "Users",
      title: "Квалифицированные водители",
      description: "Сертифицированные специалисты с большим опытом",
    },
    {
      icon: "Award",
      title: "Современное оборудование",
      description: "Новые эвакуаторы с безопасной погрузкой",
    },
    {
      icon: "HeartHandshake",
      title: "Честные цены",
      description: "Без скрытых доплат и переплат",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              О нашей компании
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Мы — профессиональная эвакуаторная служба с многолетним опытом
              работы. Оказываем услуги эвакуации и технической помощи 24 часа в
              сутки, 7 дней в неделю.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Наша команда состоит из опытных водителей и техников, готовых
              прийти на помощь в любое время дня и ночи. Мы гарантируем быструю
              подачу эвакуатора и безопасную транспортировку вашего автомобиля.
            </p>

            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">5000+</div>
                <div className="text-gray-600">Успешных эвакуаций</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-gray-600">Круглосуточно</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">15 мин</div>
                <div className="text-gray-600">Среднее время подачи</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-4 hover:shadow-md transition-shadow"
              >
                <CardContent className="text-center p-0">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon
                      name={feature.icon}
                      size={24}
                      className="text-red-600"
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
