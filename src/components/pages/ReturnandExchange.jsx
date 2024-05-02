import React from 'react'

const exchange = {
    main_title: 'Return & Exchange',
    delivery: {
        title: 'Delivering Your Jewelry Safely',
        paras: [
            {
                id: 0,
                bold: true,
                data: 'Your Jewelry is valuable, it is cared for well!'
            },
            {
                id: 1,
                bold: false,
                data: `We ship your gems or jewelry only via insured valuable shipping services by Fedex ,
                UPS etc. The default shipping methods are based on value & whether you are located in India
                or abroad. Fedex is used only for international shipping as Fedex does not ship valuables
                within India. Sri Aakriti ships using 100% insured trade logistics services for customer
                located in India. Please refer below for default shipping methods. You can upgrade the
                shipping method while purchase if you feel that is required. Please note, we do not charge
                extra for default shipping methods.`
            },
            {
                id: 2,
                bold: true,
                data: `Please note, we only ship jewelry that you order from us. We do not offer courier
                services.`
            },
            {
                id: 3,
                bold: true,
                data: `All products are insured against loss while shipping.`
            },
        ],
        default_shipping_methods: [
            {
                id: 0,
                title: 'International Shipping (Outside India)',
                points: [
                    `Value over ₹ 1,00,000 : Free UPS Valuable Shipping. Delivered within 5-7 working days
                    after dispatch to most locations. You can also upgrade to FedEx at an additional cost.`,
                    `Value below ₹ 1,00,000 : Chargeable UPS Valuable Shipping. Delivered within 5-7
                    working days after dispatch to most locations. You can also upgrade to FedEx at an
                    additional cost.`,
                ]
            },
            {
                id: 1,
                title: 'Domestic Shipping (Within India)',
                points: [
                    `All products with delivery address within India are sent via 100% insured trade parcel or
                    Registered Post or insured jewellery logistics services. They may take upto 2-3 working
                    days to reach you after dispatch.`,
                ]
            },
            {
                id: 2,
                title: 'In-store pickup',
                points: [
                    `Value over ₹ 1,00,000 : Free UPS Valuable Shipping. Delivered within 5-7 working days
                    after dispatch to most locations. You can also upgrade to FedEx at an additional cost.`,
                    `Value below ₹ 1,00,000 : Chargeable UPS Valuable Shipping. Delivered within 5-7
                    working days after dispatch to most locations. You can also upgrade to FedEx at an
                    additional cost.`,
                    `You can also choose to pickup the gems/jewelry from our office in Jaipur. Please call us at
                    +91-9829109149 to schedule a pick-up.`,
                ],
                link: 'https://www.google.co.in/maps/place/Jewelove/@26.9203075,75.8247296,17z/data=!3m1!4b1!4m6!3m5!1s0x396db60869bf1897:0x4a1af6117eb2d378!8m2!3d26.9203075!4d75.8247296!16s%2Fg%2F11btwq2xp2?entry=ttu',
            },
        ],
        return_and_exchange: {
            title: '30 Days Online Return & Exchange Policy',
            content: `The following return policy holds true for products ordered online at the Official Sriaakriti
            website only, for customers shopping from within India. We do not accept returns or
            exchange requests for items exported outside India.
            Sri Aakriti strives to achieve 100% customer satisfaction. We understand that it is difficult
            to buy jewelry without seeing & feeling it, hence in line with our commitment to customer
            satisfaction, we provide a convenient return policy.`,
            policies: [
                {
                    id: 0,
                    policy: `In the unlikely event that any merchandise you have ordered from Sri Aakriti is not received in
                    good condition or if merchandise delivered is different from what you had ordered please call
                    us immediately at the time of delivery. You may return the merchandise unused, and in the
                    same condition as you received it, in its original packaging along with original tags, certificates
                    (if any) & any other product or gift it may be accompanied with, for a refund or exchange.`,
                },
                {
                    id: 1,
                    policy: `You may email us at sriaakritijewels@gmail.com and request a return within 30 days from
                    delivery of the product to your shipping address. We will arrange for the merchandise to be
                    collected from the delivery address through our logistics partner, and returned to us. Please
                    note we shall not entertain any request for return or exchange after 30 days from delivery of
                    the product. Any returns through courier, must be accompanied by the original invoice, which
                    is shipped along with the products. We will not be able to accept returns which are not
                    accompanied by the relevant original invoice. We shall process the refund subject to receipt of
                    the merchandise at our location in unused condition in its original packaging along with
                    original tags and invoice within 30 days from delivery, failing which return/ refund shall not be
                    possible, subject to verification by Sri Aakriti.`,
                },
                {
                    id: 2,
                    policy: `Before accepting delivery of the product/s, please ensure that the packaging has not been
                    damaged or tampered with. If you believe that the merchandise is not in good condition, or if
                    the packaging is tampered with or damaged, before accepting delivery of the goods, please
                    refuse to take delivery of the package, and email us at sriaakritijewels@gmail.com or call us at
                    +91-9829109149 (10:00 am to 9:00 pm India Time - GMT + 05.30 hrs), mentioning your order
                    number.`,
                },
                {
                    id: 3,
                    policy: `For hygiene and other reasons we shall be unable to accept returns of any altered or used
                    products. If the tags from the product have been removed, we shall be unable to accept returns.`,
                },
                {
                    id: 4,
                    policy: `In the event that you return any item which is delivered to you in a tampered package & you
                    inform us at the time of delivery, there will be no additional shipping charges. In all other
                    cases, a two-way shipping charge is deducted from the refundable amount. Bank payment
                    charges & shipping costs, if applicable, may also be deducted from the refundable amount.`,
                },
                {
                    id: 5,
                    policy: `If you request a return, at the time of collecting the merchandise, our courier partners shall give
                    you a courier Airway bill, which is to be retained for future reference. Please also keep a copy
                    of the sales invoice for future reference, before handing over the return merchandise and the
                    original sales invoice to the courier. We will send the original invoice back to you through
                    courier, after processing your return request, if it is deemed necessary.`,
                },
                {
                    id: 6,
                    policy: `After the merchandise is received by Sri Aakriti, and subject to verification of the purchase and
                    condition of products, we shall process a refund/exchange within 21 working days of receipt of
                    the product/s.`,
                },
                {
                    id: 7,
                    policy: `Payment will be refunded to the customer through the same payment mode through which the
                    payment was made. For e.g.: if customer has ordered through credit card, the cancellation
                    amount will be credited back to the same account. Please note that we shall not be responsible
                    for any delays in credit to the Cardholder&#39;s credit card account as that is managed by the
                    Cardholder&#39;s issuing bank.`,
                },
                {
                    id: 8,
                    policy: `No cancellation is allowed for the Gift Card.`,
                },
                {
                    id: 9,
                    policy: `We shall not allow any exchange of jewellery products due to the differential that exists
                    between the price at the time of your order & a later time, as no two similar jewellery products
                    may be of exactly the same price.`,
                },
                {
                    id: 10,
                    policy: `Jewellery being precious in nature can only be returned through our authorized logistics
                    partners. We require the original certificates (if any), packaging material & any other material
                    sent with the product.`,
                },
                {
                    id: 11,
                    policy: `We do not accept return of customized products, customized jewelry orders, products with
                    personal engravings or products with any alteration requested or done by the customer.`,
                },
                {
                    id: 12,
                    policy: `Women&#39;s Band ring sizes below 7 & more than 15, Men&#39;s Band ring sizes below 15 & more
                    than 24 are considered special size orders & they cannot be returned, exchanged or refunded.`,
                },
                {
                    id: 13,
                    policy: `Mountings, Semi-Mounts and Only Settings are treated as custom orders and cannot be
                    returned, exchanged or refunded.`,
                },
                {
                    id: 14,
                    policy: `We do not accept order cancellation, returns or exchange for individual items priced at over ₹
                    75,000 INR.`,
                },
            ],
        },
    },
    conslusion: [
        `There may be certain orders that we are unable to accept and must cancel. We reserve the
        right, at our sole discretion, to refuse or cancel any order for any reason. Some situations that
        may result in your order being cancelled include limitations on quantities available for
        purchase, inaccuracies or errors in product or pricing information, or problems identified by
        our credit and fraud avoidance department etc. We may also require additional information or
        verification/s before accepting any order. We will inform you if the entire order or any
        portion of your order is cancelled or if additional information is required to accept your order.
        In case of any full or partial cancellation or rejection of order by Sri Aakriti, the full or partial
        payment, as the case may be, will be refunded to the customer through the same mode as the
        original payment was made by the customer.`,
        `For charges, in case of loss of the original certificates (if any), please refer to our terms &
        conditions.`,
        `We do not accept returns for jewelry shipped to outside India.`,
    ],
};

const ReturnandExchange = () => {
    return (
        <div className='w-full pb-20'>
            <h1 className='py-12 pt-16 text-[35px] font-[500] text-center'>{exchange?.main_title}</h1>
            <div className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto mb-10 mt-10'>
                <h1 className='text-[20px] font-[500] mb-8'>{exchange?.delivery?.title}</h1>
                <div className='w-full mb-5'>
                    {
                        exchange?.delivery?.paras?.map((data) => (
                            <p key={data?.id} className={`mb-3 ${data?.bold ? 'font-[500]' : ''}`}>{data?.data}</p>
                        ))
                    }
                </div>
                <div className='w-full mt-20'>
                    <h1 className='my-7'>The default shipping methods are:</h1>
                    <div className='w-full'>
                        {
                            exchange?.delivery?.default_shipping_methods?.map((data) => (
                                <div className='w-full mb-5' key={data?.id}>
                                    <h1 className='font-[500] mb-1'>{data?.title}:</h1>
                                    <div className='w-full'>
                                        {
                                            data?.points?.map((point, p_i) => (
                                                <p key={p_i}>∘ {point}</p>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                        <a href={`https://www.google.co.in/maps/place/Jewelove/@26.9203075,75.8247296,17z/data=!3m1!4b1!4m6!3m5!1s0x396db60869bf1897:0x4a1af6117eb2d378!8m2!3d26.9203075!4d75.8247296!16s%2Fg%2F11btwq2xp2?entry=ttu`} target='_blank' className='text-[15px] underline'>Click here to view our boutique location.</a>
                    </div>
                </div>
                <div className='w-full mt-20'>
                    <h1 className='text-[22px] font-[500] text-center mb-5'>{exchange?.delivery?.return_and_exchange?.title}</h1>
                    <p className='my-8'>{exchange?.delivery?.return_and_exchange?.content}</p>
                    <div className='w-full px-5'>
                        {exchange?.delivery?.return_and_exchange?.policies?.map((data, i) => (
                            <p className='mb-5' key={data?.id}><span className='font-[500]'>{i + 1}.</span> {data?.policy}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnandExchange