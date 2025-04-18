import Image from "next/image";

const Contact = () => {
  return (
    <div className="bg-[#453517] text-[#f9efd1]">
      <p className="text-center text-6xl my-6">Contact us</p>
      <div className="flex flex-col items-center gap-[4rem]">
        <div className="flex gap-[20rem]">
          <div className="flex flex-col gap-4">
            <div>
              <p>Contact : 080-4299-1022</p>
              <p>8042991000</p>
            </div>
            <div>
              <p className="py-1"> Faculty co-ordinators</p>
              <p className="py-1"> Hameem : 9620659690</p>
              <p className="py-1">Magesh : 9786243356</p>
            </div>
          </div>
          <div>Email : helpdesk@mvjce.edu.in </div>
        </div>
        <div className="flex items-center gap-2">
          <p>Built by :</p>
          <div className="flex gap-3 ">
            <Image
              src={"/assets/InscribeLogo.png"}
              width={50}
              height={50}
              alt="Inscribe Logo"
            ></Image>
            <Image
              src={"/assets/SDCLogo.png"}
              width={50}
              height={50}
              alt="Inscribe Logo"
            ></Image>
            <Image
              src={"/assets/GDGLogo.png"}
              width={50}
              height={50}
              alt="Inscribe Logo"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
