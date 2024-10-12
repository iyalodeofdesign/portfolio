import triangle from "@/assets/weird_triangles.png";
import sill_logo from "@/assets/sillohette_logo.png";
import six_icons from "@/assets/six_icons.png";
import EGISDN from "@/assets/EGISDN.png";

const About = () => {
    return (
        <section className=" bg-[#010314] py-[104px] px-[170px] font-inter">
            <div className=" grid grid-cols-2 gap-8 ">
                <div className="space-y-8">
                    <div className=" border border-[#202231] rounded-2xl h-[592px] relative ">
                        <img
                            className=" z-0 absolute left-5 bottom-2 object-contain w-[90%] h-[95%] "
                            src={sill_logo}
                            alt=""
                        />

                        <div className=" absolute z-10 p-8 bottom-0 text-white ">
                            <p className=" text-[#8E8D91]">My Story</p>
                            <p className=" text-2xl pt-1">
                                Who is Opeyemi Adeniji?
                            </p>
                            <p className=" pt-3">
                                Hello, as already known, My name is Opeyemi
                                Adeniji and i am a product design powerhouse
                                who's taking the tech world by storm! With a BSC
                                in Human Resources and Personnel Management
                                graduate certificate, I brings a unique
                                perspective to crafting user experiences that
                                are as delightful as they are functional. When I
                                am not cooking up the next big thing in the tech
                                industry, you can catch me unwinding with a
                                great movie or jamming out to her favorite
                                musician-SIA, often with her stylish sidekick
                                Smokie the Siamese cat by my side.
                            </p>
                        </div>
                    </div>

                    <div className=" border border-[#202231] rounded-2xl h-auto p-8  ">
                        <div className=" text-white">
                            <p className=" text-[#8E8D91]">Employers</p>
                            <p className=" text-2xl pt-1">
                                Companies I have worked for
                            </p>
                            <p className=" pt-3">
                                My design journey has taken me through diverse
                                roles, from working as a full-time, contract,
                                and freelance designer in various organizations.
                                I've seen projects come and go, some launched
                                into the wild and others still hatching in their
                                creative nests. Each one has been an adventure,
                                a unique chance to flex my design muscles and
                                learn something new.
                            </p>
                        </div>

                        <div className=" mt-[60px]">
                            <img className="" src={six_icons} alt="" />
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className=" border border-[#202231] rounded-2xl h-auto ">
                        <div className=" text-white p-8">
                            <p className=" text-[#8E8D91]">Hobbies</p>
                            <p className=" text-2xl pt-1">
                                If not design, what else?for
                            </p>
                            <p className=" pt-3">
                                Are you a Dragon Denizen of the Green or Black
                                House?’ Me? I proudly stand with the House of
                                Black! 🖤 Just a little snippet from House of
                                Dragon that speaks to my love for all things
                                movie-related. 📽️🎬 And yes, music is my jam
                                too! 🎶🎵 I also dabble in 8-ball games 🎱 with
                                friends, but let's be honest, I'm no shark.
                                However, when it comes to anagrams, I'm the
                                reigning champ! 🏆
                            </p>
                        </div>

                        <div>
                            <img className="" src={EGISDN} alt="" />
                        </div>
                    </div>

                    <div className=" border border-[#202231] rounded-2xl h-auto overflow-hidden ">
                        <div>
                            <img className=" w-full" src={triangle} alt="" />
                        </div>

                        <div className=" text-white p-8">
                            <p className=" text-[#8E8D91]">Experience</p>
                            <p className=" text-2xl pt-1">
                                Industries I have worked in
                            </p>
                            <p className=" pt-3">
                                My design experience spans various industries,
                                with over two years dedicated to tech.
                                Throughout my journey, I've crafted SaaS
                                solutions for large-scale clients, like bustling
                                hospitals and thriving restaurants. I've also
                                dipped my toes in the education realm by
                                designing intuitive learning management systems.
                                Additionally, I've tackled projects within the
                                e-commerce industry and the fast-paced world of
                                transportation, creating innovative solutions
                                for logistical conundrums. To top it off, I've
                                crafted sleek website templates and other unique
                                solutions for businesses, ensuring their digital
                                presence stands out in a sea of competitors.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
// import triangle from "@/assets/weird_triangles.png";
// import sill_logo from "@/assets/sillohette_logo.png";
// import six_icons from "@/assets/six_icons.png";
// import EGISDN from "@/assets/EGISDN.png";

// const About = () => {
//     return (
//         <section className=" bg-[#010314] py-[104px] px-[170px] font-inter">
//             <div className=" grid grid-cols-2 gap-8 grid-rows-[repeat(12, minmax(10px, 1fr))]">
//                 <div className=" border border-[#202231] rounded-2xl h-auto col-start-1 col-span-1 row-start-1 row-span-4 relative ">
//                     <img
//                         className=" z-0 absolute left-5 bottom-2 object-contain w-[90%] h-[95%] "
//                         src={sill_logo}
//                         alt=""
//                     />

//                     <div className=" absolute z-10 p-8 bottom-0 text-white">
//                         <p className=" text-[#8E8D91]">My Story</p>
//                         <p className=" text-2xl pt-1">
//                             Who is Opeyemi Adeniji?
//                         </p>
//                         <p className=" pt-3">
//                             Hello, as already known, My name is Opeyemi Adeniji
//                             and i am a product design powerhouse who's taking
//                             the tech world by storm! With a BSC in Human
//                             Resources and Personnel Management graduate
//                             certificate, I brings a unique perspective to
//                             crafting user experiences that are as delightful as
//                             they are functional. When I am not cooking up the
//                             next big thing in the tech industry, you can catch
//                             me unwinding with a great movie or jamming out to
//                             her favorite musician-SIA, often with her stylish
//                             sidekick Smokie the Siamese cat by my side.
//                         </p>
//                     </div>
//                 </div>

//                 <div className=" border border-[#202231] rounded-2xl h-auto col-start-2 col-span-1 row-start-1 row-span-3 ">
//                     <div className=" text-white p-8">
//                         <p className=" text-[#8E8D91]">Hobbies</p>
//                         <p className=" text-2xl pt-1">
//                             If not design, what else?for
//                         </p>
//                         <p className=" pt-3">
//                             Are you a Dragon Denizen of the Green or Black
//                             House?’ Me? I proudly stand with the House of Black!
//                             🖤 Just a little snippet from House of Dragon that
//                             speaks to my love for all things movie-related. 📽️🎬
//                             And yes, music is my jam too! 🎶🎵 I also dabble in
//                             8-ball games 🎱 with friends, but let's be honest,
//                             I'm no shark. However, when it comes to anagrams,
//                             I'm the reigning champ! 🏆
//                         </p>
//                     </div>

//                     <div>
//                         <img className="" src={EGISDN} alt="" />
//                     </div>
//                 </div>

//                 <div className=" border border-[#202231] rounded-2xl h-auto p-8 col-start-1 col-span-1 row-start-6 row-span-4 ">
//                     <div className=" text-white">
//                         <p className=" text-[#8E8D91]">Employers</p>
//                         <p className=" text-2xl pt-1">
//                             Companies I have worked for
//                         </p>
//                         <p className=" pt-3">
//                             My design journey has taken me through diverse
//                             roles, from working as a full-time, contract, and
//                             freelance designer in various organizations. I've
//                             seen projects come and go, some launched into the
//                             wild and others still hatching in their creative
//                             nests. Each one has been an adventure, a unique
//                             chance to flex my design muscles and learn something
//                             new.
//                         </p>
//                     </div>

//                     <div>
//                         <img className="" src={six_icons} alt="" />
//                     </div>
//                 </div>

//                 <div className=" border border-[#202231] rounded-2xl h-auto col-start-2 col-span-1 row-start-5 row-span-4 ">
//                     <div>
//                         <img src={triangle} alt="" />
//                     </div>

//                     <div className=" text-white p-8">
//                         <p className=" text-[#8E8D91]">Experience</p>
//                         <p className=" text-2xl pt-1">
//                             Industries I have worked in
//                         </p>
//                         <p className=" pt-3">
//                             My design experience spans various industries, with
//                             over two years dedicated to tech. Throughout my
//                             journey, I've crafted SaaS solutions for large-scale
//                             clients, like bustling hospitals and thriving
//                             restaurants. I've also dipped my toes in the
//                             education realm by designing intuitive learning
//                             management systems. Additionally, I've tackled
//                             projects within the e-commerce industry and the
//                             fast-paced world of transportation, creating
//                             innovative solutions for logistical conundrums. To
//                             top it off, I've crafted sleek website templates and
//                             other unique solutions for businesses, ensuring
//                             their digital presence stands out in a sea of
//                             competitors.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default About;
