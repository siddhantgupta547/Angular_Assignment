import { of } from 'rxjs';

export class DataService {
  paginatedCourses: any;
  wishListedCourses: any;
  total = 0;
  currentPage = 1;
  paginatedCoursesForPage = [];
  cart = new Array();
  totalCost = new Array();

  constructor() {}

  /*----------------------------------------------------Courses---------------------------------------------------*/

  courses = [
    {
      tags: ['accusantium', 'suscipit', 'adipisci'],
      details:
        'Incidunt enim veniam. Id fugit odit ipsam et iusto esse est dignissimos eum. Totam ut est nobis consequatur aut consequuntur. Et nesciunt tempore. Eius blanditiis et minima adipisci est dolorum itaque omnis quidem.\n \rInventore vel aperiam necessitatibus consequuntur tempora est est repudiandae quas. Quis natus eos accusantium eaque quaerat tempora suscipit sed. Deserunt voluptatem eius consequatur reiciendis quisquam iure. Totam aut odit eum incidunt suscipit.\n \rEum ut neque et molestiae vel repellat rerum distinctio tempora. Mollitia doloremque nisi nemo eum. Est voluptate aut perferendis consequatur et et. Natus qui voluptatem quia.',
      description: 'Tempore sed unde laboriosam qui consequatur rem.',
      discountedPrice: null,
      actualPrice: '840',
      author: 'Arthur Hansen',
      title: 'doloribus sapiente facere sit laborum qui',
      id: '1',
    },
    {
      tags: ['omnis', 'facere', 'nulla'],
      details:
        'Et impedit quis doloribus porro et hic. Qui laudantium dolorem repudiandae rerum. Expedita magni blanditiis et natus.\n \rMaiores ullam ut eos necessitatibus cum non. Delectus numquam et quia autem impedit voluptatem. Molestias numquam aspernatur. Exercitationem eum est ut.\n \rDignissimos doloremque iste inventore quam. Consectetur aliquam ea maxime cum harum aut. Quia deleniti unde architecto fugit suscipit ut. Necessitatibus dolorem ea. Consequatur ullam eum ut quam.',
      description:
        'Placeat ut impedit laborum dolorum beatae omnis voluptate adipisci eveniet.',
      discountedPrice: '564',
      actualPrice: '789',
      author: 'Velma Mohr',
      title: 'impedit velit eaque vero ut quod',
      id: '2',
    },
    {
      tags: ['earum', 'cupiditate', 'aperiam'],
      details:
        'Distinctio officia rerum est ut quis excepturi quo maxime. Ut ut quia. Et cumque nemo et vel nostrum.\n \rConsequatur labore iusto architecto libero ullam dignissimos corrupti ipsa. Laboriosam placeat et et hic. Eaque et deserunt repellendus nulla asperiores quas labore vero fugit. Nesciunt aut omnis. Eius quas distinctio sed magni consequatur nisi et debitis.\n \rAtque vitae non aperiam. Repudiandae sint itaque est et dicta autem facilis. Esse repudiandae placeat quo optio pariatur eius libero reprehenderit. Nam nihil ut perspiciatis autem vitae et eum voluptatibus repellendus. Et eius aliquam nostrum quia. Eaque enim est maiores animi et autem.',
      description:
        'Deserunt et porro animi doloribus et voluptas aliquid provident a.',
      discountedPrice: null,
      actualPrice: '838',
      author: 'Christine Anderson',
      title: 'alias laudantium id nostrum laborum',
      id: '3',
    },
    {
      tags: ['quas'],
      details:
        'Nihil voluptatem asperiores modi eos quia qui minus ad ea. Mollitia quasi doloribus necessitatibus deleniti dolores qui. Sed aut maxime et minima aut. Illum aut eveniet deserunt voluptas nisi repudiandae maxime sint.\n \rFacere eligendi iusto in est porro et sed velit. Laudantium quis voluptatibus est vel illum unde odit. Aliquid ducimus enim minima dolores debitis omnis sequi.\n \rTotam expedita tempora. Commodi ex voluptatum doloremque. Sit voluptas porro.',
      description: 'Rerum maxime sint.',
      discountedPrice: '592',
      actualPrice: '735',
      author: 'Doug Schiller',
      title: 'saepe quam est',
      id: '4',
    },
    {
      tags: ['rem', 'consequatur', 'vero'],
      details:
        'Quaerat deleniti provident ipsam dolorem quisquam sint tempore. Atque magni aut tempore aperiam nesciunt rerum rerum non. Officiis accusamus nihil perspiciatis. Reprehenderit aliquid quam rerum cumque quia sunt.\n \rMolestias consectetur fuga perferendis facilis harum perferendis dolorem. Modi et eaque. Voluptatem repellat sint ut nam sapiente omnis voluptas eos. Alias hic et voluptatem aspernatur dolorem et provident. Quibusdam numquam libero placeat. Dolorem nostrum accusamus aspernatur odit temporibus porro qui in distinctio.\n \rIn ratione quam dolore. Exercitationem qui dolorum ut dolorem commodi sequi accusamus eum reiciendis. Natus maxime temporibus eum eos alias consequatur voluptas quia.',
      description:
        'Omnis enim rerum cum nihil voluptas commodi sit libero quo.',
      discountedPrice: null,
      actualPrice: '728',
      author: 'Terry Lubowitz',
      title: 'at omnis nobis adipisci sint',
      id: '5',
    },
    {
      tags: ['voluptatem', 'ea', 'ut'],
      details:
        'Ab dignissimos quo consequatur autem culpa maxime amet quidem voluptatem. Necessitatibus ut molestiae quia. Accusantium quia provident numquam.\n \rAut esse facere aut velit expedita molestiae temporibus. Nesciunt reprehenderit corrupti nulla cumque molestiae. Vel nobis voluptas eaque aut perspiciatis est est sint magni. Ea debitis quod corrupti.\n \rTotam distinctio sed explicabo et provident tempora. Ea aut autem. Et laborum blanditiis sapiente quidem mollitia possimus et earum qui. Voluptate ut et error nemo libero quo.',
      description:
        'Facere sit consectetur sunt sunt rerum libero doloremque fuga.',
      discountedPrice: '560',
      actualPrice: '819',
      author: 'Jacquelyn Vandervort',
      title: 'voluptates similique mollitia veniam',
      id: '6',
    },
    {
      tags: ['alias', 'aut'],
      details:
        'Aliquam animi vitae ea rerum dolorem nulla laborum. Veritatis repudiandae expedita ducimus sunt. Et adipisci necessitatibus quibusdam. Sint qui enim aut modi id ad. Quia voluptas illum.\n \rVoluptas ratione dolor qui assumenda dignissimos quia beatae ad. Quae adipisci eos eveniet. Nisi voluptate quia ipsam qui ipsam est maiores sequi cum.\n \rMaxime eum et provident amet consequatur aut placeat. Sint deleniti qui. Beatae nesciunt dignissimos asperiores aperiam ut ducimus. Voluptatem quis ipsum eveniet dignissimos vero atque sit error. Ut sit facilis aut in quibusdam rerum reiciendis est.',
      description: 'Voluptas doloremque accusamus ipsum facere impedit sed.',
      discountedPrice: '550',
      actualPrice: '722',
      author: 'Karla Dibbert',
      title: 'nostrum quod provident quia',
      id: '7',
    },
    {
      tags: ['aut', 'itaque'],
      details:
        'Vel alias tempore molestiae deleniti dolor non. Tempore qui dignissimos exercitationem qui deserunt illum ipsum possimus eligendi. Aut cumque qui qui aperiam fugit. Ut laboriosam maxime veritatis veniam velit. Blanditiis et sit labore ad quis maiores et qui adipisci.\n \rMaxime quibusdam itaque modi. Tenetur ipsa eligendi ut sunt. Voluptatum id sint cupiditate.\n \rDolor autem sit nisi. Et ea et quas. Omnis qui sunt. Est cum quasi quia minima.',
      description: 'Ipsam ut corporis omnis minima libero.',
      discountedPrice: '648',
      actualPrice: '712',
      author: 'Dr. Ollie Kuhn',
      title: 'sequi magnam id culpa',
      id: '8',
    },
    {
      tags: ['voluptatum'],
      details:
        'A est sed repellat. Dicta ut expedita accusantium ipsum quis quo. Facere culpa animi quo iste. Impedit ut quam et. Culpa odit id. Eos nostrum qui molestias eos non harum.\n \rEst aut omnis. Quae maiores quidem similique dolorem nemo ut corporis. Dolor rem voluptas qui sed. Tenetur reiciendis qui ipsam modi. Ipsa quia et voluptatum quae maiores. Mollitia quis saepe consequuntur et cum consequatur.\n \rQuos optio ab dolor officiis. Rem exercitationem velit quam voluptatem sed aliquam in atque itaque. Ullam laudantium voluptas aliquid accusantium eos. Neque dolores nam non dolorem.',
      description: 'Delectus est aut eius magni officia dignissimos quasi.',
      discountedPrice: '652',
      actualPrice: '775',
      author: 'Ana Schimmel',
      title: 'veritatis occaecati sint eos',
      id: '9',
    },
    {
      tags: ['dolorum', 'voluptatum'],
      details:
        'Quo error incidunt reiciendis fuga esse eos. Non consequatur aliquid ea a nemo tempora aperiam. Placeat sunt earum et ut adipisci explicabo. Tempora voluptatem amet mollitia qui sunt. Itaque autem quas nihil dignissimos et voluptatem. Et et porro perspiciatis et rerum dolor asperiores blanditiis.\n \rPerspiciatis dolorum accusamus nam perferendis molestiae est libero voluptatem consectetur. Hic repudiandae magni ea dolores totam. Voluptatem labore voluptates soluta molestias. Deleniti ea fuga veritatis non pariatur.\n \rMolestias dolores blanditiis reiciendis. Dolores voluptatem tenetur nemo dicta iure id enim. Tenetur et laboriosam facilis sint vel sunt dolore. Voluptas nulla porro ullam temporibus ut voluptatibus deleniti quod. Sed qui sed at sed. Sed eius dolore.',
      description: 'Voluptas voluptatibus excepturi corporis.',
      discountedPrice: '589',
      actualPrice: '704',
      author: 'Chester Corkery',
      title: 'delectus et ea aut ipsum assumenda',
      id: '10',
    },
    {
      tags: ['omnis', 'consectetur', 'voluptas'],
      details:
        'Aperiam iure ut quidem minima. Dolorem error amet mollitia occaecati cum qui aperiam. Vel sunt alias aut aut autem. Iure itaque at corporis voluptatem tenetur. Sed facere et voluptatem eum veritatis repudiandae alias rerum minus. Similique consequuntur assumenda dolores nisi autem sapiente nihil.\n \rVeritatis ut voluptatum deserunt numquam molestias et in rerum. Sit sapiente molestiae non officia illo asperiores. Non sunt quaerat et recusandae.\n \rSint magnam possimus. Rerum neque ducimus temporibus nihil. Blanditiis omnis et.',
      description: 'Excepturi eum autem odio perferendis sit sit.',
      discountedPrice: '683',
      actualPrice: '764',
      author: 'Amy Bins',
      title: 'ut rerum ipsam quos ratione aut',
      id: '11',
    },
    {
      tags: ['distinctio'],
      details:
        'Consequuntur rerum dolorum reprehenderit sunt excepturi quia dolore. Nulla ullam et alias occaecati cum aut in aut occaecati. Eveniet aspernatur ut nisi nostrum reiciendis quo et. Iste sed dolorem sit fuga enim quis eligendi. Excepturi cupiditate esse omnis quisquam.\n \rVoluptatibus asperiores ut enim voluptas placeat. Voluptatem laborum ex excepturi quasi magni atque aperiam incidunt dignissimos. Nesciunt reprehenderit minus voluptatibus molestias illum quasi quia ut.\n \rEnim rerum ut. Ut placeat molestiae hic. Aut eos dolores voluptas laudantium aut qui vero voluptas dolores. Dolorem mollitia incidunt officiis. Quasi minus rerum delectus. Et reiciendis vel enim veniam sint.',
      description:
        'Tenetur aut omnis iure aut eaque itaque repellat itaque possimus.',
      discountedPrice: '609',
      actualPrice: '737',
      author: 'Julie Hilpert',
      title: 'et voluptate tempore fugiat laudantium',
      id: '12',
      saleEndTime: '2022-01-20T01:48:00',
    },
    {
      tags: ['autem', 'minus', 'quia'],
      details:
        'Repellat occaecati velit nulla eum enim. Dolor corporis id quas voluptas dolorem. Et impedit et dolore. Repudiandae est quibusdam omnis sed ut. Vel in minima unde. Soluta sunt in vel nostrum vitae atque unde id.\n \rSint est mollitia non excepturi quo optio. Eum odio necessitatibus ut ipsam. A unde natus error qui ut. Modi et labore dolores odit sapiente voluptas quibusdam.\n \rNumquam unde rerum iusto et deserunt. Amet rerum voluptatum ut magni pariatur id. Quia alias sunt earum sit. In sit aut quaerat. Voluptatum magni dolore repudiandae asperiores voluptate ea possimus fugit. Autem quidem dolores impedit ducimus hic.',
      description: 'At et a cumque exercitationem.',
      discountedPrice: '594',
      actualPrice: '855',
      author: 'Benny Swaniawski',
      title: 'ea sint repudiandae temporibus sit maiores',
      id: '13',
      saleEndTime: '2022-01-19T01:48:00',
    },
    {
      tags: ['delectus'],
      details:
        'Asperiores a optio ipsum. Quia aut illo et atque aspernatur nulla asperiores ipsa. Ad error sed qui odit sint non repellendus. Dicta mollitia consequuntur repudiandae dolorum. Molestiae dolorem earum est alias iure nostrum magnam molestias.\n \rVitae exercitationem facilis voluptatem rem laudantium animi maxime blanditiis. A praesentium laborum nulla. Veniam adipisci beatae. Eum voluptatem cumque odio quibusdam officia. Deleniti dolorem a. Maxime ea similique laborum recusandae molestias ut blanditiis officia.\n \rIure vitae ea alias ut porro eaque. Repudiandae incidunt velit ullam excepturi omnis est et. Qui et ipsa odit nihil voluptatem unde. Inventore molestias quam magnam.',
      description: 'Quis voluptates aut vero esse et qui.',
      discountedPrice: null,
      actualPrice: '818',
      author: 'Tricia Goodwin',
      title: 'et ut est nesciunt nam atque',
      id: '14',
    },
    {
      tags: ['nihil', 'ab'],
      details:
        'Cum totam cum eius. Quos ut molestiae rerum. Laudantium repudiandae et temporibus. Eos ipsa voluptatem ut consequatur provident. Quia delectus dolor voluptates quas dolor exercitationem deleniti aut non. Molestias itaque autem nesciunt.\n \rAnimi nihil nesciunt. Voluptas dolor reprehenderit voluptas non. Enim quod impedit maiores distinctio fugiat et quo sapiente omnis. Et sint possimus nostrum nihil reiciendis. Numquam neque nisi incidunt quasi perferendis architecto necessitatibus sit. Architecto fugiat maxime.\n \rQuisquam ut praesentium aliquam aut ullam. Qui mollitia voluptatum dolorum. A est alias ducimus aut.',
      description: 'Accusantium maiores asperiores ut quia omnis rerum.',
      discountedPrice: '655',
      actualPrice: '835',
      author: 'Kelvin Dooley',
      title: 'doloribus neque aliquam',
      id: '15',
      saleEndTime: '2022-01-19T02:48:00',
    },
  ];

  /*----------------------------------------------------Sorting Code---------------------------------------------------*/

  sortPriceAsc() {
    const courses = this.courses.sort((a, b) => {
      let priceA: any;
      let priceB: any;
      if (a.discountedPrice != null) priceA = a.discountedPrice;
      else priceA = a.actualPrice;

      if (b.discountedPrice != null) priceB = b.discountedPrice;
      else priceB = b.actualPrice;
      return priceA - priceB;
    });
    this.paginateCoursesMethod(courses);
    return this.getCourse(this.currentPage);
  }

  sortPriceDesc() {
    const courses = this.courses.sort((a, b) => {
      let priceA: any;
      let priceB: any;
      if (a.discountedPrice != null) priceA = a.discountedPrice;
      else priceA = a.actualPrice;

      if (b.discountedPrice != null) priceB = b.discountedPrice;
      else priceB = b.actualPrice;
      return priceB - priceA;
    });
    this.paginateCoursesMethod(courses);
    return this.getCourse(this.currentPage);
  }

  /*----------------------------------------------------get Courses Code---------------------------------------------------*/

  getCourseAndInitialize() {
    this.paginateCoursesMethod(this.courses);
    return this.paginatedCourses[0];
  }

  getCourse(page: any) {
    return this.paginatedCourses[page - 1];
  }

  /*----------------------------------------------------Pagination Code---------------------------------------------------*/

  paginateCoursesMethod(courses: any) {
    this.total = Math.ceil(courses.length / 5);
    const paginatedCourse = [];
    for (let i = 0; i < this.total; i++) {
      const newArray = [];
      for (let j = i * 5; j < 5 * (i + 1); j++) {
        newArray.push(courses[j]);
        if (courses[courses.length - 1] === courses[j]) break;
      }
      paginatedCourse.push(newArray);
    }
    this.currentPage = 1;
    this.paginatedCourses = paginatedCourse;
  }

  onNext() {
    this.currentPage += 1;
    this.paginatedCoursesForPage = this.getCourse(this.currentPage);
    return this.paginatedCoursesForPage.slice();
  }

  onPrev() {
    this.currentPage -= 1;
    this.paginatedCoursesForPage = this.getCourse(this.currentPage);
    return this.paginatedCoursesForPage.slice();
  }

  onPageClick(page: any) {
    this.currentPage = page;
    this.paginatedCoursesForPage = this.getCourse(this.currentPage);
    return this.paginatedCoursesForPage.slice();
  }

  /*----------------------------------------------------Search Filter Code---------------------------------------------------*/

  OnSearch(searchString: any) {
    const foundCourses = this.courses.filter((course) =>
      course.title.toLowerCase().includes(searchString.toLowerCase())
    );
    if (foundCourses.length <= 0) return [];
    this.paginateCoursesMethod(foundCourses);
    this.currentPage = 1;
    console.log(foundCourses, this.total, this.paginatedCourses);
    return this.getCourse(this.currentPage);
  }

  /*----------------------------------------------------Cart Code---------------------------------------------------*/

  getCartItems() {
    return of(this.cart);
  }

  getTotalCost() {
    let totalPrice = 0;
    for (let cartItem of this.cart) {
      if (cartItem.discountedprice != null)
        totalPrice += cartItem.discountedprice;
      else {
        totalPrice += cartItem.actualPrice;
      }
    }
    this.totalCost.push(totalPrice);
    return of(this.totalCost);
  }

  addToCart(course: any) {
    if (this.cart.find((cartItem: any) => cartItem.id === course.id)) return;
    else {
      this.cart.push(course);
      sessionStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  removeFromCart(course: any) {
    if (this.cart.length <= 0) return;
    if (this.cart.find((cartItem: any) => cartItem.id === course.id)) return 0;
    else {
      this.cart = this.cart.filter(
        (cartItem: any) => cartItem.id !== course.id
      );
      console.log(this.cart);
      return 1;
    }
  }

  /*----------------------------------------------------***********---------------------------------------------------*/
}
