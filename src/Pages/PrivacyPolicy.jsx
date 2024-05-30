
const PrivacyPolicy = () => {
    return (
        <div className="container mx-auto px-4 py-8 prose prose-sm bg-white text-black rounded-lg sm:prose lg:prose-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Privacy Policy</h2>
            <div className="flex md:px-4 text-start gap-3">
                <p>
                    This privacy policy explains how we collect, use, and store your data
                    when you use our website.
                </p>
                <p>
                    We collect information you provide directly, such as your name and
                    email address when you contact us. We may also collect data about your
                    usage of the website, such as the pages you visit and the time you spend
                    on them.
                </p>
                <p>
                    We use your data to provide and improve our services, personalize your
                    experience, and communicate with you. We will not share your data with
                    third parties without your consent.
                </p>
                <p>
                    You have the right to access, update, and delete your data. You can also
                    opt out of receiving communications from us.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;