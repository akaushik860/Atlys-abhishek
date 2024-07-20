// src/components/Home.js
import React, { useState } from 'react';
import SignUpModal from './SignUpModal';


const Home = () => {
  const postData = [
    {
      name: "Theresa Webb",
      time: "5",
      edited: false,
      type: "👋",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: "24",
      profile: "https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoE-raK0~jpV1hiebtklrbwwiwYAYERs-GibIr4INGRpUYw3OKbAIt1Em53BZO1wJelCpUP3BShIQt~pUWP50FJtIrUMBJMYpTTnarlg7h~Oxndlnpg7wWTWy8isQM92ZVHgY1kEpO3JY3Og7eIQH0eWX~nAHhaV7nzVu9T2ocGJPujd-VWQ6CqCpC5LSkaPXFkFJ4Ke1cup5Ni84st~z7-lCrate8O287~srliQT7ZyGLTBra0rF2Ejo6Aak2UtM2MfqQX36793R1MmwqiiVaqu6ivhCUXDVidLBnkIHprHFGS9xfhqlFPzUAvn2zKUODeB1fHgRwbM4FYqX5BRfQ__"
    },
    {
      name: "Adam John",
      time: "12",
      edited: false,
      type: "👋",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: "29",
      profile: "https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoE-raK0~jpV1hiebtklrbwwiwYAYERs-GibIr4INGRpUYw3OKbAIt1Em53BZO1wJelCpUP3BShIQt~pUWP50FJtIrUMBJMYpTTnarlg7h~Oxndlnpg7wWTWy8isQM92ZVHgY1kEpO3JY3Og7eIQH0eWX~nAHhaV7nzVu9T2ocGJPujd-VWQ6CqCpC5LSkaPXFkFJ4Ke1cup5Ni84st~z7-lCrate8O287~srliQT7ZyGLTBra0rF2Ejo6Aak2UtM2MfqQX36793R1MmwqiiVaqu6ivhCUXDVidLBnkIHprHFGS9xfhqlFPzUAvn2zKUODeB1fHgRwbM4FYqX5BRfQ__"
    },
    {
      name: "Marvin McKinney",
      time: "8",
      edited: true,
      type: "😞",
      description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      comments: "12",
      profile: "https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WjaO4xqO6OzQAES5oQgdW~RHgV~tNFklS42NwFL5VzYnY0PU4uQMfGcUBQAvfEPv7~bE8~3B7BwCV~iRjAiACBcX7~j71KwTqirlKUAwL23LCcp0kcfkPUYSrM4wykguQIACVrWCqqw58x~V1tVZGkTHN1XoDXenXiwzh-g8303noTAS32E~oBM9cY2wP5CHB7Y~BUriVU4FXjWaKojivlD7bg8prFSn~AuiliZJ9Pla-WJA2T8gMSi2RXiqKqTAm8aa9U3jpFcKsUcfwf9NFVUvLk9-wMf7MVDKCSIx8MMUBMQGqBXXnX~3iWkWeFdKpJHl8KsyeNwOke9Ydu~FdQ__"
    }
  ]
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
      setIsModalOpen(true);
  };

  const closeModal = () => {
      setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-black flex justify-center text-gray-100 p-8">
      <div className="w-6/12">
        <h1 className="text-4xl mb-4 text-[#C5C7CA]">Hello Jane</h1>
        <p className="mb-6 w-9/12 text-[#C5C7CA]">
          How are you doing today? Would you like to share something with the
          community 🧑‍🤝‍🧑
        </p>
        <div className="bg-[#35373B] p-4 rounded-lg h-48 shadow-lg mb-6">
          <h2 className="text-xl mb-2 text-[#C5C7CA]">Create post</h2>
          <div className="flex items-center mb-4">
            <div className="bg-[#191920] flex w-full items-center p-2 pl-5 gap-2 rounded-lg rounded-full">
              <span>💬</span>
              <input
                className="w-full text-white bg-[#191920] px-3 py-2  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="How are you feeling today?"
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={()=>setIsModalOpen(true)}
            className="bg-blue-600 w-24 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 float-right"
          >
            Post
          </button>
        </div>
        {postData?.map((data)=>{
          return  <div className="bg-[#35373B] p-4 rounded-lg shadow-lg mb-4">
          <div className="flex justify-between">
            <div className="flex items-center mb-2">
              <img
                src={data?.profile}
                alt={data?.name}
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg">{data?.name}</h3>
                <p className="text-gray-400 text-sm">{data?.time}mins ago</p>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <img src="/dots.png" width="20px" height="20px"></img>
            </div>
          </div>
          <div className="bg-[#191920] flex w-full items-center p-2 pl-3.5 gap-2 rounded-lg rounded-full">
            <span className="bg-[#27292D] p-3 h-10 rounded-full flex items-center">
              {data?.type}
            </span>
            <span className="text-[#7F8084]">
             {data?.description}
            </span>
          </div>
          <p className="text-gray-400 text-sm flex gap-2 mt-3">
            {" "}
            <img src="/chat.png" width="20px" height="20px"></img>{data?.comments} comments {data?.edited === true && "• Edited"}
          </p>
        </div>
        })}
      </div>
      <SignUpModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Home;
