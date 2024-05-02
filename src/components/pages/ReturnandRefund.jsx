import React from 'react'

const refund_policy = {
    title: 'Refund policy',
    policies: [
        `The following return policy holds true for products ordered online at Sriaakriti.in, the Official
        Sri Aakriti website, Sri Aakriti Jewels Platinum Jewelry website & the Sri Aakriti Jewels
        blog only, for customers shopping from within India. We do not accept returns or exchange
        requests for items exported outside India.
        Sri Aakriti Jewels strives to achieve 100% customer satisfaction. We understand that it is
        difficult to buy jewelry without seeing & feeling it, hence in line with our commitment to
        customer satisfaction, we provide a convenient return policy.`,

        `In the unlikely event that any merchandise you have ordered from Sriaakriti is not received in
        good condition or if merchandise delivered is different from what you had ordered please call
        us immediately at the time of delivery. you may return the merchandise unused, and in the
        same condition as you received it, in its original packaging along with original tags,
        certificates (if any) & any other product or gift it may be accompanied with, for a refund or
        exchange.`,

        `You may email us at www.sriakriti.com and request a return within 14 days from delivery of
        the product to your shipping address. We will arrange for the merchandise to be collected
        from the delivery address through our logistics partner, and returned to us. Please note we
        shall not entertain any request for return or exchange after 14 days from delivery of the
        product. Any returns through courier, must be accompanied by the original invoice, which is
        shipped along with the products. We will not be able to accept returns which are not
        accompanied by the relevant original invoice. We shall process the refund subject to receipt
        of the merchandise at our location in unused condition in its original packaging along with
        original tags and invoice within 14 days from delivery, failing which return/ refund shall not
        be possible, subject to verification by Sri Aakriti Jewels.`,

        `Before accepting delivery of the product/s, please ensure that the packaging has not been
        damaged or tampered with. If you believe that the merchandise is not in good condition, or if
        the packaging is tampered with or damaged, before accepting delivery of the goods, please
        refuse to take delivery of the package, and email us at www.sriakriti.com or call us at +91-
        9829109149 (10:00 am to 9:00 pm India Time - GMT + 05.30 hrs), mentioning your order
        number.`,

        `For hygiene and other reasons we shall be unable to accept returns of any altered or used
        products. If the tags from the product have been removed, we shall be unable to accept
        returns.
        In the event that you return any item which is delivered to you in a tampered package & you
        inform us at the time of delivery, there will be no additional shipping charges. In all other
        cases, a two-way shipping charge is deducted from the refundable amount. Bank payment
        charges & shipping costs, if applicable, may also be deducted from the refundable amount.`,

        `If you request a return, at the time of collecting the merchandise, our courier partners shall
        give you a courier Airway bill, which is to be retained for future reference. Please also keep a
        copy of the sales invoice for future reference, before handing over the return merchandise and
        the original sales invoice to the courier. We will send the original invoice back to you
        through courier, after processing your return request, if it is deemed necessary.`,

        `After the merchandise is received by Sri Aakriti Jewels, and subject to verification of the
        purchase and condition of products, we shall process a refund/exchange within 21 working
        days of receipt of the product/s.`,

        `Payment will be refunded to the customer through the same payment mode through which the
        payment was made. For e.g.: if customer has ordered through credit card, the cancellation
        amount will be credited back to the same account. Please note that we shall not be
        responsible for any delays in credit to the Cardholder's credit card account as that is managed
        by the Cardholder's issuing bank.`,

        `No cancellation is allowed for the Gift Card.`,

        `We shall not allow any exchange of jewellery products due to the differential that exists
        between the price at the time of your order &amp; a later time, as no two similar jewellery
        products may be of exactly the same price.`,

        `Jewellery being precious in nature can only be returned through our authorized logistics
        partners. We require the original certificates (if any), packaging material &amp; any other material
        sent with the product.`,

        `We do not accept return of customized products, customized jewelry orders, products with
        personal engravings or products with any alteration requested or done by the customer.`,

        `There may be certain orders that we are unable to accept and must cancel. We reserve the
        right, at our sole discretion, to refuse or cancel any order for any reason. Some situations that
        may result in your order being cancelled include limitations on quantities available for
        purchase, inaccuracies or errors in product or pricing information, or problems identified by
        our credit and fraud avoidance department etc. We may also require additional information or
        verification/s before accepting any order. We will inform you if the entire order or any
        portion of your order is cancelled or if additional information is required to accept your order.
        In case of any full or partial cancellation or rejection of order by Sri Aakriti Jewels, the full or
        partial payment, as the case may be, will be refunded to the customer through the same mode
        as the original payment was made by the customer.`,

        `For charges, in case of loss of the original certificates (if any), please refer to our terms &amp;
        conditions.`,

        `We do not accept returns for jewelry shipped to outside India.`,
    ]
}

const ReturnandRefund = () => {
    return (
        <div className='w-full pb-20'>
            <h1 className='py-12 pt-16 text-[35px] font-[500] text-center'>{refund_policy.title}</h1>
            <div className='w-[80%] md:w-[70%] lg:w-[60%] mx-auto text-center mt-10'>
                {
                    refund_policy?.policies?.map((data, i) => (
                        <p key={i} className='mb-10'>{data}</p>
                    ))
                }
            </div>
        </div>
    )
}

export default ReturnandRefund