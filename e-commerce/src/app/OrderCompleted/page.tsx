import Image from "next/image"
import Link from "next/link"

export default function OrderCompleted () {
    return(
        <div className="w-full h-[800]">
            <div className="w-full h-[150px] bg-[#F2F0FF] px-20 pt-10 mb-5">
              <h1 className="text-[30px] font-serif font-bold">Hekto Demo</h1>
            </div>
            <div className="m-20">
                <h1 className="text-lg font-serif font-bold">Hekto Demo</h1>
                <p className="text-sm text-gray-400">Cart/Information/Shopping/payment</p>
            </div>
            <div>
                <div>
                    <Image
                    src="/images/clock 1.png"
                    alt="clock"
                    height={100}
                    width={100}
                    className="w-20 h-20"
                    ></Image>
                </div>
                <h1>Your Order is Completed</h1>
                <p>
                  Thank you for your order! Your order is being processed and will be completed within 3-6 <br />
                  hours. You will receive an email confirmation when your order is completed.
                </p>
                <button>
                    Contine Shopping
                </button>
                <div>
                   <Image
                    src="/images/Group.png"
                    alt="Notebook"
                    height={100}
                    width={100}
                    className="w-20 h-20"
                    ></Image>
                </div>
            </div>
            <div>
                <Image
                    src="/images/Signatures.png"
                    alt="Signature"
                    height={100}
                    width={100}
                    className="w-20 h-20"
                ></Image>
            </div>
        </div>
    )
}