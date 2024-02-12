import Image from "next/image"
import pageLoader from '@/app/assets/images/Captivating Geometric GIFs by Florian de Looij — Colossal.gif'
import { Manrope } from "next/font/google"

const mamrope = Manrope({ weight: '400', subsets: ['cyrillic'] })
const facts = [
    "Over 78 % of online retail traffic comes from mobile devices, and mobile apps boast 3x higher conversion rates than mobile websites.",
    "Nearly 94 % of internet users worldwide have made an online purchase, translating to 2.77 billion e - commerce shoppers globally.",
    "Over 22 % of consumers have bought products directly through social media platforms like Instagram and Pinterest.",
    "Despite its popularity,e-commerce experiences a high cart abandonment rate of around 70 %, emphasizing the need for smooth user experience.",
    "Nearly half of small businesses believe free shipping increases their profitability, highlighting its importance for conversions.",
    "93 % of millennials use their mobile devices to compare deals before buying, showcasing their price - conscious and tech - savvy nature.",
    "While 71 % of Gen Z and 68 % of millennials shop online weekly, only 43 % of baby boomers do the same.",
    "Fashion and apparel reign supreme in the e-commerce world, followed closely by electronics and media.",
    "The e-commerce giant, Amazon, boasts the largest market share, with net sales exceeding $386 billion in 2019.",
    "The Chinese e-commerce market is the largest globally, valued at over $1.9 trillion in 2019.",
    "The average e-commerce website conversion rate sits between 2 - 3 %, highlighting the constant need for optimization.",
    "40 % of all e-commerce sales during the holiday season come from mobile phones, emphasizing their crucial role in peak periods.",
    " While the average online shopper spends only 2.74 USD per visit, this varies greatly across categories and individual behavior.",
    "Subscription services are gaining traction, with consumers spending an average of $265 per year on them.",
    "High-quality product images and videos significantly improve conversion rates, showcasing their importance in product presentation.",
    "Personalized product recommendations and marketing campaigns lead to higher engagement and conversion rates.",
    " Eco-friendly packaging and responsible sourcing are becoming increasingly important for consumers, impacting purchasing decisions.",
    "Customer reviews and testimonials significantly influence buying decisions, making them a valuable marketing tool.",
    "Voice-activated shopping through devices like Alexa and Google Assistant is projected to grow significantly in the coming years.",
    "Blending physical and digital experiences, like click - and - collect options, can enhance the customer journey and offer a competitive edge."
]

const selectFact = (max: number, min: number) => {
    const postId = Math.floor(Math.random() * (max - min) + min)

    return facts[postId]
}
const loading = () => {
    return (
        <>
            <div className="w-full h-full bg-[#262626] flex fixed justify-center items-center">
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <Image src={pageLoader} alt="loading" className="w-11/12 lg:w-1/2 lg:h-[60%] object-cover gap-10" />
                    <p className="text-white sm:text-lg md:text-base lg:text-lg w-11/12 p-1 text-center" style={mamrope.style}>{selectFact(19, 0)}</p>
                </div>
            </div>
        </>
    )
}

export default loading
