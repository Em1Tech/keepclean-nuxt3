export const useServiceModal = defineStore('service_modal', {

   state() {
      return {
         modalState: false,
         services: [
            {
               title: 'Carpet Cleaning',
               description: 'Revive the beauty and comfort of your office space with our comprehensive carpet cleaning services. Our expert technicians employ high-quality machines and eco-friendly products to remove dirt, stains, and allergens from carpets, leaving them fresh, clean, and inviting.'
            },
            {
               title: 'Windows Cleaning',
               description: 'Enhance the clarity of your workplace with our impeccable window cleaning services. Our skilled team utilises the Reach and Wash Systems, which streamline the cleaning of large buildings and windows by employing water-fed poles, eliminating the need for ladders. This method ensures scratch-free and crystal-clear windows that allow natural light to flood in, creating a vibrant and welcoming atmosphere.'
            },
            {
               title: 'Housekeeping: AIRBNB',
               description: 'Our dedicated housekeeping services ensure your office remains organised, sanitised, and in shape. From dusting and vacuuming to restroom upkeep and waste management, we handle all the details so you can focus on your core business activities.'
            },
            {
               title: 'Renting Bedding',
               description: 'Elevate the comfort of your guest accommodations with our premium bedding rental services. Our bed linen services are available through weekly, bi-weekly, and monthly subscription plans. This service covers all the necessary bed linens, including hand towels and bath towels. Your business does not need to worry - We deliver fresh linens and collect used ones.'
            },
            {
               title: 'General Cleaning',
               description: 'Our comprehensive general cleaning services cover every nook and cranny of your premises. From lobbies to meeting rooms, we leave no stone unturned in ensuring a pristine environment that reflects your professionalism.'
            },
            {
               title: 'Student Packs',
               description: 'As part of our comprehensive suite of services, Keep Clean proudly offers a specialised solution designed to meet the unique needs of student accommodations, Airbnb hosts, hostels, and more. These packs include a wide array of products, covering Bedding, Bathroom, Laundry, and Accessories. From cosy bedding to practical bathroom amenities and laundry essentials, our thoughtfully assembled packs cater to every need, ensuring comfort and convenience. Additionally, we provide the option of delivery within 24 hours, making it easy for you to access these essential items.'
            }
         ],
         modalContent: {},
         menuMobile: false,
         aboutPoints: [
            {
               title: 'Transparency',
               description: 'We believe in open and honest communication, providing clarity in all our dealings with clients, employees, and partners.'
            },
            {
               title: 'Punctuality',
               description: 'Time is precious, and we respect it. We adhere to schedules rigorously, ensuring our services are delivered promptly.'
            },
            {
               title: 'Flexibility',
               description: 'We understand that every client is unique. Our flexibility allows us to tailor our services to your specific requirements.'
            },
            {
               title: 'Environmental Sustainability',
               description: 'We are committed to minimising our environmental footprint. Our sustainable practices and eco-friendly products reflect this dedication.'
            },
            {
               title: 'Respect People',
               description: 'We treat everyone with respect, from our valued clients to our hardworking employees. Respect is at the core of our work culture.'
            },
            {
               title: 'Relationship',
               description: 'Building strong and enduring relationships with our clients is fundamental. We believe that collaboration and trust are the keys to success.'
            },
            {
               title: 'Quality',
               description: "Quality is not just a goal; it's our way of doing business. We never compromise on the excellence of our services."
            },
         ],
         faqs: [
            {
               question: 'What types of properties does Keep Clean offer cleaning services for?',
               answer: "We cater to a wide range of properties, including hotels, shops, office blocks, houses, apartments, and more. Our services are versatile and adaptable to suit your business' unique needs.",
               state: false
            },
            {
               question: "How do I request a quote for cleaning services?",
               answer: "You can request a quote by visiting our website's 'Contact Us' page or calling us. Our team will gather the necessary information and provide a competitive and transparent quote tailored to your needs. You will receive a contact in less than 24 hours.",
               state: false
            },
            {
               question: "Does Keep Clean offer ongoing maintenance contracts?",
               answer: "Yes, we provide tailored maintenance contracts to suit your business' needs. These contracts ensure that your space remains consistently clean and well-maintained over time.",
               state: false
            },
            {
               question: "Where is Keep Clean located?",
               answer: "Keep Clean is conveniently situated in the heart of Dublin City Centre. Our strategic location allows us to efficiently serve businesses throughout Dublin and its surrounding areas. If you have specific location-related inquiries or need directions to our office, please feel free to reach out to us, and we'll be happy to assist you.",
               state: false
            },
            {
               question: "Can Keep Clean accommodate urgent cleaning needs?",
               answer: "Yes, we understand that emergencies happen. We offer flexible scheduling options and can accommodate urgent cleaning requests whenever possible. Contact us, and we'll do our best to assist you promptly.",
               state: false
            },
            {
               question: "Is Keep Clean's cleaning service environmentally friendly?",
               answer: "Absolutely! We are fully committed to sustainability. Our cleaning practices prioritise eco-friendly products and procedures that minimise our environmental impact while ensuring a clean and healthy space.",
               state: false
            },
            {
               question: "Is Keep Clean insured and bonded?",
               answer: "Yes, we are fully insured and bonded for your peace of mind. Our insurance coverage provides an added layer of protection in the unlikely event of any issues during our services.",
               state: false
            },
            {
               question: "How do I contact Keep Clean for inquiries or to schedule services?",
               answer: "You can reach us through our website's contact form, email, WhatsApp or call. Our friendly team is ready to assist you with any questions or service requests.",
               state: false
            },
            {
               question: "Are Keep Clean's staff members trained?",
               answer: "Yes, all our team members are extensively trained. We prioritise professionalism and safety in every aspect of our service.",
               state: false
            },
         ]
      }
   },

   actions: {
      changeModalState(state, service) {
         this.modalContent = {};
         this.modalState = false;
         
         if(state == true) {
            this.modalContent = service;
            this.modalState = state;
         } else {
            this.modalContent = {};
            this.modalState = false;
         }
      },
      changeFaqState(faqIndex) {
         this.faqs.forEach((faq, index) => {
            if (index === faqIndex) {
               faq.state = !faq.state;
            } else {
               faq.state = false;
            }
         });
      }
   },
   
})

