const testChat = [
  {
    user: false,
    payload: {
      message: "Hello! I'm your Research Assistant",
      keywords: [],
      follow_up_questions: [],
    },
  },
  {
    user: true,
    payload: {
      message: "3d printing",
      keywords: [],
      follow_up_questions: [],
    },
  },
  {
    user: false,
    payload: {
      message:
        "## 3D Printing: A Detailed Overview\n" +
        "\n" +
        "3D printing, also known as additive manufacturing, is a revolutionary technology that has transformed various industries, from manufacturing to healthcare. Here's a detailed breakdown:\n" +
        "\n" +
        "**1. The Process:**\n" +
        "\n" +
        "   * **Digital Design:** 3D printing starts with a digital model of the desired object created using computer-aided design (CAD) software. This model contains precise specifications of the object's shape, size, and material composition.\n" +
        "   * **Slicing:** The digital model is then sliced into thin layers, typically cross-sections, by specialized software. Each slice represents a layer that will be printed.\n" +
        "   * **Material Deposition:**  A 3D printer utilizes a material, such as plastic, metal, ceramic, or resin, which is selectively deposited layer by layer onto a platform following the instructions from the sliced data.  \n" +
        "   * **Building Up:** The material deposition process continues, with each layer bonding to the previous one, until the entire object is built up from the bottom to the top.\n" +
        "   * **Post-Processing (Optional):**  Depending on the material and application, post-processing steps like cleaning, sanding, or heat treatment may be required to refine the finished product.\n" +
        "\n" +
        "**2. Key Advantages:**\n" +
        "\n" +
        "   * **Rapid Prototyping:** 3D printing enables rapid prototyping, allowing designers to quickly create and test various designs before committing to expensive tooling and production runs.\n" +
        "   * **Customization and Personalization:** The ability to print complex geometries and intricate details allows for mass customization and personalization of products. This caters to individual needs and preferences.\n" +
        "   * **Lightweight and Complex Designs:** 3D printing can create objects with intricate designs, hollow structures, and lightweight features that are difficult or impossible to achieve with traditional manufacturing methods.\n" +
        "   * **Reduced Waste:** By building up objects layer by layer, 3D printing minimizes material waste compared to traditional subtractive manufacturing methods, such as machining, where material is removed to create the desired shape.\n" +
        "   * **Distributed Manufacturing:** 3D printing enables distributed manufacturing, allowing businesses to produce goods closer to customers or in remote locations, reducing transportation costs and lead times.\n" +
        "\n" +
        "**3. Applications:**\n" +
        "\n" +
        "   * **Manufacturing:** Prototyping, tooling, custom parts, and production runs. \n" +
        "   * **Healthcare:** Prosthetics, implants, surgical guides, anatomical models, and personalized medicine.\n" +
        "   * **Education:** STEM education, hands-on learning, and customized teaching aids.\n" +
        "   * **Architecture and Design:** Architectural models, building components, and customized furniture.\n" +
        "   * **Aerospace:** Lightweight components, tooling, and satellite parts.\n" +
        "   * **Consumer Goods:** Customized jewelry, toys, and accessories.\n" +
        "\n" +
        "**4. Challenges and Limitations:**\n" +
        "\n" +
        "   * **Material Limitations:** 3D printing is still developing, and the range of materials available is limited compared to traditional manufacturing methods. Some materials are expensive or difficult to print.\n" +
        "   * **Production Scale:** 3D printing is currently more suited for prototyping and small-scale production runs. Scaling up to high-volume manufacturing can be challenging and expensive.\n" +
        "   * **Print Quality and Accuracy:** The quality and accuracy of 3D printed objects can vary depending on the printer, material, and printing process. Achieving high precision and smooth surface finishes can be difficult. \n" +
        "   * **Skill and Expertise:** Operating and maintaining 3D printers requires a certain level of technical skill and expertise. \n" +
        "\n" +
        "**5. Future Directions:**\n" +
        "\n" +
        "   * **Material Innovation:** Research and development are focused on expanding the range of printable materials, including advanced polymers, composites, and biocompatible materials.\n" +
        "   * **Scale-Up and Automation:** Efforts are underway to improve the speed, accuracy, and automation of 3D printing processes for high-volume manufacturing.\n" +
        "   * **Industry Integration:** 3D printing is increasingly integrated into traditional manufacturing processes, leading to hybrid manufacturing approaches that combine additive and subtractive techniques. \n" +
        "   * **Ethical Considerations:** The widespread adoption of 3D printing raises ethical considerations regarding intellectual property, cybersecurity, and the potential for misuse.\n" +
        "\n" +
        "3D printing is a rapidly evolving technology with tremendous potential to revolutionize manufacturing, healthcare, education, and other industries. As research and development continue, 3D printing is poised to become an even more integral part of our lives. ",
      keywords: [
        "3D printing",
        "additive manufacturing",
        "prototyping",
        "customization",
        "manufacturing",
      ],
      follow_up_questions: [
        "What are the ethical concerns of 3D printing?",
        "How does 3D printing impact the future of manufacturing?",
        "What are the different types of 3D printers?",
      ],
    },
  },
  {
    user: true,
    payload: {
      message: "AR VR",
      keywords: [],
      follow_up_questions: [],
    },
  },
  {
    user: false,
    payload: {
      message:
        "## Augmented Reality (AR) and Virtual Reality (VR) in Brief\n" +
        "\n" +
        "**Augmented Reality (AR)**\n" +
        "\n" +
        "* **Definition:** AR overlays digital information onto the real world, enhancing users' perception of reality through devices like smartphones, tablets, and smart glasses.  Think of Pokemon Go, where digital creatures appear in the real world through your phone's camera.\n" +
        "* **Key Features:**\n" +
        "    * **Combines real and digital worlds:** AR overlays digital elements onto the real world, blending virtual content with physical surroundings.\n" +
        "    * **Interactive and immersive:** Users can interact with the virtual content, manipulating objects, and receiving feedback from the environment.\n" +
        "    * **Real-time rendering:** AR displays information in real-time, updating the virtual content as the user's perspective changes.\n" +
        "* **Examples:**\n" +
        "    * **Gaming:** Pokemon Go, Ingress\n" +
        "    * **Education:** Interactive anatomy apps, virtual field trips\n" +
        "    * **Retail:** Virtual try-on applications for clothing and makeup\n" +
        "    * **Navigation:** AR apps that provide directions and overlay information onto real-world scenes.\n" +
        "\n" +
        "**Virtual Reality (VR)**\n" +
        "\n" +
        "* **Definition:** VR creates fully immersive digital environments that replace the real world, using headsets to simulate a 360° experience. Think of games like Beat Saber or Half-Life: Alyx, where you are fully immersed in a virtual world.\n" +
        "* **Key Features:**\n" +
        "    * **Immersive and interactive:** VR immerses users in a completely virtual environment, enabling interaction with virtual objects and environments.\n" +
        "    * **Sensory engagement:** VR often includes visual, auditory, and sometimes tactile feedback, enhancing the feeling of presence in the virtual world.\n" +
        "    * **High fidelity graphics and processing power:** VR requires significant computational power to create realistic and engaging virtual experiences.\n" +
        "* **Examples:**\n" +
        "    * **Gaming:** Beat Saber, Half-Life: Alyx\n" +
        "    * **Training and Simulation:** Virtual flight simulators, medical training programs\n" +
        "    * **Therapy and Rehabilitation:** VR environments for treating phobias, managing pain, and improving motor skills\n" +
        "    * **Architecture and Design:** VR for visualizing and experiencing architectural designs.\n" +
        "\n" +
        "**Key Differences:**\n" +
        "\n" +
        "* **Real world vs. Virtual world:** AR augments the real world with digital information, while VR replaces the real world with a simulated one.\n" +
        "* **Device usage:** AR typically uses smartphones, tablets, or smart glasses, while VR requires headsets that block out the real world.\n" +
        "* **Level of immersion:** VR offers a more immersive experience than AR, as it completely replaces the real world with a virtual one.\n" +
        "\n" +
        "**Applications in Education:**\n" +
        "\n" +
        "* **Engaging learning experiences:** AR and VR can create interactive and immersive learning environments, enhancing student engagement and motivation.\n" +
        "* **Personalized learning:** AR and VR can tailor learning experiences to individual student needs and preferences.\n" +
        "* **Hands-on learning:** AR and VR allow students to interact with virtual objects and environments, promoting hands-on learning and understanding.\n" +
        "* **Accessible learning:** AR and VR can provide access to learning experiences that might otherwise be inaccessible, such as virtual field trips to historical sites or scientific experiments.\n" +
        "\n" +
        "**Beyond Education:**\n" +
        "\n" +
        "The use of AR and VR extends far beyond education, impacting fields like: \n" +
        "* **Healthcare:**  Medical simulations, surgery training, and treatment for mental health conditions.\n" +
        "* **Retail:** Virtual try-on experiences and interactive product demonstrations.\n" +
        "* **Manufacturing:**  Remote collaboration, training, and factory simulations.\n" +
        "* **Entertainment:** Immersive video games, virtual concerts, and theme park experiences.\n" +
        "\n" +
        "**Future Prospects:**\n" +
        "\n" +
        "AR and VR technologies are rapidly evolving, with advancements in hardware, software, and content development. We can expect to see even more innovative applications of these technologies across various sectors in the coming years.",
      keywords: [
        "augmented reality",
        "virtual reality",
        "AR",
        "VR",
        "education",
      ],
      follow_up_questions: [
        "What are the ethical implications of AR/VR?",
        "What are the challenges of implementing AR/VR in education?",
        "How can AR/VR be used to improve accessibility in education?",
      ],
    },
  },
];

const initChat = [
  {
    user: false,
    payload: {
      message: "Hello! I'm your Research Assistant",
      keywords: [],
      follow_up_questions: [],
    },
  },
];

export { initChat, testChat };
