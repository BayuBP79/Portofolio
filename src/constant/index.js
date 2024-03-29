import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    laravel,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    sanityasa,
    tesla,
    shopify,
    jobsearch,
    monitoring,
    kammi,
    marinecrew,
    nuansa,
    senadmob,
    workerbase,
    akunbiz,
    senadweb,
    spectraline,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "PT. Sanityasa Anjaya Daniswara",
      icon: sanityasa,
      iconBg: "#383E56",
      date: "Jan 2020 - Present",
      points: [
        "Developing and maintaining web applications using PHP, Laravel, React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit....",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mollis orci ultrices, feugiat justo dignissim, tristique tellus. Quisque scelerisque varius.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "BisnisLink",
      description:
        "BisnisLink adalah marketplace yang ditujukan untuk UMKM di Indonesia, aplikasi ini memiliki 4 modul, Admin, Supplier, Reseller dan Buyer.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "GCP",
          color: "orange-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobsearch,
      source_code_link: "https://github.com/",
    },
    {
      name: "KAMMI",
      description:
        "Kesatuan Aksi Mahasiswa Muslim Indonesia adalah salah satu organisasi kemahasiswaan di Indonesia. Aplikasi yang saya buat berbentuk website yang memiliki 3 bagian, landing page, dashboard pusat dan dashboard kepengurusan turunannya. Website ini berfungsi untuk menyeragamkan media publikasi kegiatan KAMMI seluruh Indonesia dan pengelolaan kader organisasi.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "WildCard",
          color: "orange-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: kammi,
      source_code_link: "https://github.com/",
    },
    {
      name: "CrewMarine ",
      description:
        "CrewMarine adalah website yang mengelola awak kapal, seperti pembuatan surat tugas, surat ijin, tracking pekerjaan awak kapal dan sebagainya, aplikasi ini dikelola oleh PT. Atlantik Pratama Indonesia yang merupakan penyedia awak kapal profesional.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: marinecrew,
      source_code_link: "https://github.com/",
    },
    {
      name: "Progress Monitoring",
      description:
        "Web application that enables users view work progress, time estimate and work verification.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: monitoring,
      source_code_link: "https://github.com/",
    },
    {
      name: "Workerbase",
      description:
        "Workerbase adalah website yang menyediakan lowongan pekerjaan luar negri, dikelola oleh PT. Assalam Karya Manunggal yang merupakan penyalur Tenaga Kerja Indonesia. Website ini memiliki dua pengguna, yaitu admin dan pelamar.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: workerbase,
      source_code_link: "https://github.com/",
    },
    {
      name: "AkunBiz",
      description:
        "Akun.biz adalah sebuah aplikasi keuangan sederhana yang berfungsi untuk mencatat pemasukan dan pengeluaran sehari-hari.",
      tags: [
        {
          name: "Cordova",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: akunbiz,
      source_code_link: "https://github.com/",
    },
    {
      name: "Nuansa",
      description:
        "Nuansa merupakan web aplikasi yang digunakan untuk mengelola produksi mebel sampai pada tahap expor. Sistem ini dapat menentukan harga dari masing-masing komponen, baik bahan mentah, bahan jadi, maupun bahan coating. Secara keseluruhan dapat di atur komposisi pembuatan suatu produk sehingga menjadi barang siap di pasarkan dan masuk ke tahap export.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: nuansa,
      source_code_link: "https://github.com/",
    },
    {
      name: "KKP Spectraline",
      description:
        "Spectraline merupakan web aplikasi yang digunakan untuk kebutuhan expor ikan hasil tangkapan di Kementrian Kelautan dan Perikanan seperti melakukan verifikasi dokumen, organoleptik, penandatanganan dokumen dan HC SPM.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: spectraline,
      source_code_link: "https://github.com/",
    },
    {
      name: "SenAd Apps",
      description:
        "SenAd (Sentral Admin) merupakan aplikasi kustom dari Senad Vision yang digunakan untuk mempermudah agen asuransi dalam mengajukan proposal, psa maupun claim polis nasabah.",
      tags: [
        {
          name: "Cordova",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: senadmob,
      source_code_link: "https://github.com/",
    },
    {
      name: "SenAd Admin",
      description:
        "SenAd (Sentral Admin) merupakan aplikasi kustom dari Senad Vision yang digunakan untuk mempermudah agen asuransi dalam mengajukan proposal, psa maupun claim polis nasabah.",
      tags: [
        {
          name: "PHP",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: senadweb,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  