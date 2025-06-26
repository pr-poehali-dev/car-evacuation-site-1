import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section className="py-16 px-4 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-xl opacity-90">
            Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <CardTitle>Телефон</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-2xl font-bold text-red-400 mb-2">
                +7 (495) 123-45-67
              </div>
              <p className="opacity-80">Круглосуточно</p>
              <Button className="mt-4 bg-red-600 hover:bg-red-700">
                Позвонить сейчас
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <CardTitle>Адрес</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-2">г. Москва и Московская область</p>
              <p className="opacity-80 mb-4">Работаем по всему региону</p>
              <Button
                variant="outline"
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              >
                Показать на карте
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-700 border-gray-600 text-white">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <CardTitle>Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-lg font-semibold text-red-400 mb-2">
                info@evacuator24.ru
              </div>
              <p className="opacity-80 mb-4">Ответим в течение часа</p>
              <Button
                variant="outline"
                className="border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
              >
                Написать письмо
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-red-600 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">
              Нужен эвакуатор прямо сейчас?
            </h3>
            <p className="text-xl mb-6">
              Звоните! Диспетчер примет заявку и отправит ближайший эвакуатор
            </p>
            <Button
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 text-xl px-8 py-6 h-auto font-bold"
            >
              <Icon name="Phone" size={24} className="mr-2" />
              +7 (495) 123-45-67
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
