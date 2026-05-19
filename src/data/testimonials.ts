export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marina Albuquerque",
    role: "Cliente residencial",
    quote:
      "Meu sofá voltou a parecer novo. O atendimento foi impecável, do orçamento à entrega.",
    rating: 5,
  },
  {
    name: "Rafael Cavalcanti",
    role: "Empresário",
    quote:
      "Contratamos para o escritório inteiro. Profissionalismo e resultado acima da expectativa.",
    rating: 5,
  },
  {
    name: "Juliana Mendes",
    role: "Arquiteta",
    quote:
      "Indico para todos os meus clientes. Cuidado com cada peça e acabamento premium.",
    rating: 5,
  },
  {
    name: "Carlos Henrique",
    role: "Gerente de hotel",
    quote:
      "Atenderam todo o nosso enxoval de colchões com agilidade e zero impacto na operação. Recomendo.",
    rating: 5,
  },
  {
    name: "Patrícia Lopes",
    role: "Designer de interiores",
    quote:
      "Time pontual, educado e técnico. O tapete persa da minha cliente ficou impecável.",
    rating: 5,
  },
  {
    name: "Fernando Lima",
    role: "Cliente residencial",
    quote:
      "Após a impermeabilização, a água escorre como vídeo de comercial. Vale cada centavo.",
    rating: 5,
  },
];
