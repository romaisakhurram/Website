import Image from "next/image"
import Heading from "../Shop/Heading"

export default function Shop () {
    const data = [ 
    {
        id:1,
        title :"Vel elit euismod",
        price:"$26.00",
        delPrice:"$42.00",
        Image: "/images/shop1.png"
    },
    {
        id:2,
        title :"Ultricies condimentum imperdiet",
        price:"$26.00",
        delPrice:"$42.00",
        Image : "/images/shop2.png"
    },
    {
        id:3,
        title :"Vitae suspendisse sed",
        price:"$26.00",
        delPrice:"$42.00",
        Image : "/images/shop3.png"
    },
    {
        id:4,
        title :"Sed at fermentum",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop4.png"
    },
    {
        id:5,
        title :"Fusce pellentesque at",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop5.png"
    },
    {
        id:6,
        title :"Vestibulum magna laoreet",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop6.png"
    },
    {
        id:7,
        title :"Sollicitudin amet orci",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop7.png"
    },
    {
        id:8,
        title :"Ultrices mauris sit",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop8.png"
    },
    {
        id:9,
        title :"Pellentesque condimentum",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop9.png"
    },
    {
        id:10,
        title :"Cras scelerisque velit",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop10.png"
    },
    {
        id:11,
        title :"Lectus vulputate faucibus",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop11.png"
    },
    {
        id:12,
        title :"Purus risus, ut",
        price:"$26.00",
        delPrice:"$42.00",
       Image : "/images/shop4.png"
    },
    ]

    return (
           <div className="w-full h-full flex justify-center flex-wrap mt-15 p-5">
                <Heading/>
                <br /> <br />
                  {data.map ((Idata) => (
                   <div className="w-[250px] h-[300px] m-[30px] p-[10px] gap-5">
                       <div className=" bg-[#F2F0FF] items-center shadow-lg border border-gray-300 w-[500] h-[600]">
                         <Image src={Idata.Image} 
                         alt={Idata.title} 
                         width={250} 
                         height={200} 
                         className="w-75 h-60 p-3"
                         ></Image>
                       </div>
                       <div className="p-2 font-serif text-center">
                         <h2 className="font-bold text-blue-950 text-sm">{Idata.title}</h2>
                         <p className="text-gray-400 text-sm">{Idata.price}<del className="text-pink-600">{Idata.delPrice}</del></p>
                       </div>
                   </div>
                   ))}
                   <div>
                       <Image
                       src="/images/Signatures.png"
                       alt="Signature"
                       width={500}
                       height={500}
                       className=" ml-[10%] mt-5"
                        ></Image>
                   </div>
               </div>      
    )
}
