import ContactUsHero from "./ContactUsHero/ContactUsHero"
import ContactUsForm from "./ContactUsForm/ContactUsForm"
import ContactUsInfo from "./ContactUsInfo/ContactUsInfo"
import ContactUsCTA from "./ContactUsCTA/ContactUsCTA"

const ContactUs = () => {
  return (
    <div>
      <ContactUsHero />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactUsForm />
            <ContactUsInfo />
          </div>
        </div>
      </div>
      <ContactUsCTA />
    </div>
  )
}

export default ContactUs
