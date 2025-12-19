import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("numbers");

  const telegramLink = "https://t.me/straxdoksmaks";

  const countries = [
    { code: "all", name: "Все страны", flag: "🌍" },
    { code: "us", name: "США", flag: "🇺🇸" },
    { code: "gb", name: "Великобритания", flag: "🇬🇧" },
    { code: "de", name: "Германия", flag: "🇩🇪" },
    { code: "fr", name: "Франция", flag: "🇫🇷" },
    { code: "tr", name: "Турция", flag: "🇹🇷" },
    { code: "cn", name: "Китай", flag: "🇨🇳" },
  ];

  const numbers = [
    {
      id: 1,
      country: "us",
      name: "США",
      price: "90 ₽",
      features: ["SMS подтверждение", "Голосовые вызовы", "Моментальная активация"],
      popular: true,
    },
    {
      id: 2,
      country: "gb",
      name: "Великобритания",
      price: "150 ₽",
      features: ["SMS подтверждение", "Голосовые вызовы", "Моментальная активация"],
      popular: false,
    },
    {
      id: 3,
      country: "de",
      name: "Германия",
      price: "Договорная",
      features: ["SMS подтверждение", "Голосовые вызовы", "Индивидуальные условия"],
      popular: false,
    },
    {
      id: 4,
      country: "fr",
      name: "Франция",
      price: "80 ₽",
      features: ["SMS подтверждение", "Голосовые вызовы", "Моментальная активация"],
      popular: false,
    },
    {
      id: 5,
      country: "tr",
      name: "Турция",
      price: "110 ₽",
      features: ["SMS подтверждение", "Голосовые вызовы", "Моментальная активация"],
      popular: false,
    },
    {
      id: 6,
      country: "cn",
      name: "Китай",
      price: "Договорная",
      features: ["SMS подтверждение", "Голосовые вызовы", "Индивидуальные условия"],
      popular: true,
    },
  ];

  const premiumPlans = [
    {
      id: 1,
      duration: "3 месяца",
      price: "1 450 ₽",
      features: ["Все функции Premium", "Эксклюзивные стикеры", "Увеличенные лимиты"],
      popular: false,
    },
    {
      id: 2,
      duration: "6 месяцев",
      price: "1 850 ₽",
      features: ["Все функции Premium", "Эксклюзивные стикеры", "Увеличенные лимиты", "Экономия 15%"],
      popular: true,
    },
    {
      id: 3,
      duration: "1 год",
      price: "3 350 ₽",
      features: ["Все функции Premium", "Эксклюзивные стикеры", "Увеличенные лимиты", "Экономия 25%"],
      popular: false,
    },
  ];

  const starsPackages = [
    { id: 1, stars: 50, price: "80 ₽" },
    { id: 2, stars: 100, price: "160 ₽" },
    { id: 3, stars: 200, price: "320 ₽" },
    { id: 4, stars: 500, price: "800 ₽" },
    { id: 5, stars: 1000, price: "1 600 ₽" },
    { id: 6, stars: 2500, price: "4 000 ₽" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Алексей М.",
      avatar: "👨‍💼",
      rating: 5,
      text: "Отличный сервис! Номер работает стабильно уже 3 месяца. Поддержка отвечает моментально.",
      date: "2 дня назад",
    },
    {
      id: 2,
      name: "Мария К.",
      avatar: "👩‍💻",
      rating: 5,
      text: "Telegram Premium активировался без проблем. Рекомендую всем!",
      date: "5 дней назад",
    },
    {
      id: 3,
      name: "Дмитрий В.",
      avatar: "👨‍🔧",
      rating: 5,
      text: "Быстрая доставка, качественные номера. Уже заказываю второй раз.",
      date: "1 неделю назад",
    },
  ];

  const guarantees = [
    {
      icon: "Shield",
      title: "Гарантия работы",
      description: "30 дней полной работоспособности номера",
    },
    {
      icon: "RefreshCw",
      title: "Возврат средств",
      description: "100% возврат если номер не работает",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Помощь в любое время суток",
    },
    {
      icon: "Lock",
      title: "Безопасность",
      description: "Конфиденциальность данных гарантирована",
    },
  ];

  const filteredNumbers =
    selectedCountry === "all"
      ? numbers
      : numbers.filter((num) => num.country === selectedCountry);

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
              <Icon name="Phone" size={20} className="text-background" />
            </div>
            <span className="text-xl font-bold text-gradient">PremiumNumber</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#catalog" className="text-foreground/80 hover:text-foreground transition-colors">
              Каталог
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-foreground transition-colors">
              Отзывы
            </a>
            <a href="#guarantees" className="text-foreground/80 hover:text-foreground transition-colors">
              Гарантии
            </a>
          </div>
          <Button className="gradient-gold text-background font-semibold hover:opacity-90">
            Войти
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 gradient-gold text-background border-0 px-4 py-2 text-sm font-semibold">
              Премиум-сервис номеров
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Физические номера
              <br />
              <span className="text-gradient">мирового класса</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Надежные номера для SMS-активации и Telegram Premium из ведущих стран мира с
              гарантией возврата средств
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-gold text-background font-semibold text-lg px-8 hover:opacity-90"
              >
                <Icon name="Sparkles" className="mr-2" size={20} />
                Выбрать номер
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 hover:bg-white/5 text-lg px-8"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Как это работает
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-primary/20 blur-[120px] rounded-full" />
      </section>

      <section id="catalog" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог товаров</h2>
            <p className="text-muted-foreground text-lg">
              Выберите категорию и получите товар за несколько минут
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12 animate-scale-in">
            <Button
              variant={selectedCategory === "numbers" ? "default" : "outline"}
              className={
                selectedCategory === "numbers"
                  ? "gradient-gold text-background border-0"
                  : "border-white/20 hover:bg-white/5"
              }
              onClick={() => setSelectedCategory("numbers")}
            >
              <Icon name="Phone" className="mr-2" size={20} />
              Физические номера
            </Button>
            <Button
              variant={selectedCategory === "premium" ? "default" : "outline"}
              className={
                selectedCategory === "premium"
                  ? "gradient-gold text-background border-0"
                  : "border-white/20 hover:bg-white/5"
              }
              onClick={() => setSelectedCategory("premium")}
            >
              <Icon name="Crown" className="mr-2" size={20} />
              Telegram Premium
            </Button>
            <Button
              variant={selectedCategory === "stars" ? "default" : "outline"}
              className={
                selectedCategory === "stars"
                  ? "gradient-gold text-background border-0"
                  : "border-white/20 hover:bg-white/5"
              }
              onClick={() => setSelectedCategory("stars")}
            >
              <Icon name="Star" className="mr-2" size={20} />
              Telegram Stars
            </Button>
          </div>

          {selectedCategory === "numbers" && (
            <div className="flex flex-wrap gap-3 justify-center mb-12 animate-scale-in">
              {countries.map((country) => (
                <Button
                  key={country.code}
                  variant={selectedCountry === country.code ? "default" : "outline"}
                  className={
                    selectedCountry === country.code
                      ? "gradient-gold text-background border-0"
                      : "border-white/20 hover:bg-white/5"
                  }
                  onClick={() => setSelectedCountry(country.code)}
                >
                  <span className="mr-2 text-xl">{country.flag}</span>
                  {country.name}
                </Button>
              ))}
            </div>
          )}

          {selectedCategory === "numbers" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNumbers.map((number, index) => (
                <Card
                  key={number.id}
                  className="glass p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {number.popular && (
                    <Badge className="absolute top-4 right-4 gradient-blue text-white border-0">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      Популярно
                    </Badge>
                  )}
                  <div className="text-4xl mb-4 animate-float">
                    {countries.find((c) => c.code === number.country)?.flag}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{number.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-gradient">{number.price}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {number.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full gradient-gold text-background font-semibold hover:opacity-90"
                    onClick={() => window.open(telegramLink, "_blank")}
                  >
                    Купить номер
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Card>
              ))}
            </div>
          )}

          {selectedCategory === "premium" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {premiumPlans.map((plan, index) => (
                <Card
                  key={plan.id}
                  className="glass p-8 hover:scale-105 transition-all duration-300 relative overflow-hidden group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {plan.popular && (
                    <Badge className="absolute top-4 right-4 gradient-blue text-white border-0">
                      <Icon name="TrendingUp" size={14} className="mr-1" />
                      Популярно
                    </Badge>
                  )}
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                    <Icon name="Crown" size={32} className="text-background" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.duration}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient">{plan.price}</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full gradient-gold text-background font-semibold hover:opacity-90"
                    onClick={() => window.open(telegramLink, "_blank")}
                  >
                    Купить Premium
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Card>
              ))}
            </div>
          )}

          {selectedCategory === "stars" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {starsPackages.map((pkg, index) => (
                <Card
                  key={pkg.id}
                  className="glass p-6 hover:scale-105 transition-all duration-300 relative overflow-hidden group text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                    <Icon name="Star" size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2">{pkg.stars} ⭐</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  </div>
                  <Button
                    className="w-full gradient-gold text-background font-semibold hover:opacity-90"
                    onClick={() => window.open(telegramLink, "_blank")}
                  >
                    Купить Stars
                  </Button>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <section id="guarantees" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-primary/10" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши гарантии</h2>
            <p className="text-muted-foreground text-lg">
              Ваша уверенность — наш приоритет
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <Card
                key={index}
                className="glass p-6 text-center hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 gradient-blue rounded-2xl flex items-center justify-center mx-auto mb-4 animate-float">
                  <Icon name={guarantee.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{guarantee.title}</h3>
                <p className="text-muted-foreground">{guarantee.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground text-lg">
              Более 5000 довольных клиентов
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <Card
                key={review.id}
                className="glass p-6 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center text-2xl">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={14} className="text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="container mx-auto relative z-10">
          <Card className="glass p-12 max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 gradient-gold rounded-3xl flex items-center justify-center mx-auto mb-6 animate-float">
              <Icon name="Zap" size={40} className="text-background" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Готовы начать?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Получите свой премиум-номер за 5 минут
            </p>
            <Button
              size="lg"
              className="gradient-gold text-background font-semibold text-lg px-12 hover:opacity-90"
            >
              <Icon name="ArrowRight" className="mr-2" size={20} />
              Выбрать номер сейчас
            </Button>
          </Card>
        </div>
      </section>

      <footer className="border-t border-white/10 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 gradient-gold rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} className="text-background" />
                </div>
                <span className="font-bold text-gradient">PremiumNumber</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Надежный сервис физических номеров для SMS и Telegram Premium
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    США
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Европа
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Азия
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Условия использования
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 PremiumNumber. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;