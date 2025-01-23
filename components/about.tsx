
// export default function About() {
//     return (
//       <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
//         <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
//           <div className="space-y-4">
//             <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
//             <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//   Hey! I&apos;m Vivek Sharma, a web developer with over three years of experience. I specialize in building dynamic and user-friendly websites using <span className="font-bold text-red-500">TypeScript, JavaScript, React, MongoDB, and Node.js.</span>
  
//   <br />
//   <br />
//   I&apos;m passionate about creating visually appealing, high-performance websites that deliver seamless user experiences.
// </p>

//           </div>
//           <div className="grid gap-4">
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Background</h3>
//                 <p className="text-muted-foreground">
//                 I'm a final-year B.Tech student in Computer Science & Engineering at IIIT Bhagalpur, specializing in scalable web applications using the MERN stack. I've built projects like a real estate app, e-commerce site, and freelancing marketplace with secure APIs and responsive designs. Previously, I solved 600+ Computer Science problems as a Subject Matter Expert at Chegg.
//                 </p>
//               </div>
//             <div className="grid gap-1">
//               <h3 className="text-xl font-bold">Skills</h3>
//               <p className="text-muted-foreground">
//               I&apos;m proficient in C++, JavaScript, and the MERN stack (MongoDB, Express.js, React.js, Node.js). I have experience with frameworks like Tailwind CSS, Bootstrap, and Redux, as well as developer tools such as Git, Postman, and MongoDB Compass. My focus is on building scalable applications with secure APIs, responsive designs, and seamless user experiences.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

export default function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container mx-auto grid items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h2>
          <p className="max-w-lg text-muted-foreground md:text-lg leading-relaxed">
            Hey! I&apos;m Vivek Sharma, a web developer with over three years of experience. I specialize in building dynamic and user-friendly websites using{' '}
            <span className="font-semibold text-red-500">
              TypeScript, JavaScript, React, MongoDB, and Node.js
            </span>.
            <br /><br />
            I&apos;m passionate about creating visually appealing, high-performance websites that deliver seamless user experiences.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Background Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-muted-foreground">Background</h3>
            <p className="text-muted-foreground">
              I&apos;m a final-year B.Tech student in Computer Science & Engineering at IIIT Bhagalpur, specializing in scalable web applications using the MERN stack. I&apos;ve built projects like a real estate app, e-commerce site, and freelancing marketplace with secure APIs and responsive designs. Previously, I solved 600+ Computer Science problems as a Subject Matter Expert at Chegg.
            </p>
          </div>

          {/* Skills Section */}
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-muted-foreground">Skills</h3>
            <p className="text-muted-foreground">
              I&apos;m proficient in C++, JavaScript, and the MERN stack (MongoDB, Express.js, React.js, Node.js). I have experience with frameworks like Tailwind CSS, Bootstrap, and Redux, as well as developer tools such as Git, Postman, and MongoDB Compass. My focus is on building scalable applications with secure APIs, responsive designs, and seamless user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
