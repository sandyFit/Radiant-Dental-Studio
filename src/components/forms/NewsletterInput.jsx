
const NewsletterInput = () => {
    return (
        <div className='flex flex-col items-center'>
            <input
                type="email"
                id="email"
                className="bg-niceBlue border-4 border-spanishBlue 
                        text-azure text-lg rounded-lg focus:outline-none
                        focus:ring-2 focus:ring-azure focus:border-azure
                        block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
            />

            <div className="py-6">
                <button className='button transparent-btn w-[10rem] py-2'>
                    submit
                </button>
            </div>

            <p className='text-spanishBlue font-medium text-regular text-[.8rm]'>
                Occasionally we send newsletters containing practice news. If you'd like to receive this
                information, sign up to our email above. We take your privacy seriously and ensure that
                your information will not be passed on to anyone.
            </p>

            
    </div> 
    )
}

export default NewsletterInput