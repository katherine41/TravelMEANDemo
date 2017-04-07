/**
 * Created by Katherine on 2016/6/13.
 */
module.exports=function(app,models){
    var BLikeAttractionModel=models.BLikeAttractionModel;
    var BLikeHotelModel=models.BLikeHotelModel;
    var BLikeEatModel=models.BLikeEatModel;
    var BLikeGuideModel=models.BLikeGuideModel;
    var BCommentModel=models.BCommentModel;
    var BUserModel=models.BUserModel;
    var BFollowModel=models.BFollowModel;
    var attraction=[
        { _id: "1",
            type:"1",
            image:"./image/1harvard.jpg",
            name: "Harvard University",
            rank:"1",
            address:"1350 Massachusetts Ave, Cambridge, MA",
            official:"http://www.harvard.edu/visitors/tours",
            phone:"617-495-9400",
            description:"Harvard University is a private research university in Cambridge, Massachusetts (US), established 1636, whose history, influence and wealth have made it one of the world's most prestigious universities."
        },
        { _id: "2",
            type:"1",
            image:"./image/2freedom.png",
            name: "Freedom Trial",
            rank:"2",
            address:"Charles Street, Boston, MA",
            official:"http://www.thefreedomtrail.org/",
            phone:"617-357-8300",
            description:"Freedom Trail, a 2.5-mile, red-lined route that leads you to 16 historically significant sites — each one an authentic treasure. Explore museums and meetinghouses, churches, and burying grounds. Learn about the brave people who shaped our nation. Discover the rich history of the American Revolution, as it began in Boston, where every step tells a story."
        },
        { _id: "3",
            type:"1",
            image:"./image/3mit.jpg",
            name: "MIT",
            rank:"3",
            address:"Massachusetts Avenue Cambridge, MA",
            official:"http://web.mit.edu/",
            phone:"617-253-1000",
            description:"The Massachusetts Institute of Technology is an independent, coeducational, privately endowed university committed to the extension of knowledge through teaching and research. It is organized into five academic Schools — Architecture and Planning; Engineering; Humanities, Arts, and Social Sciences; Management; and Science — and numerous interdisciplinary programs and activities."
        },
        { _id: "4",
            type:"1",
            image:"./image/4Quincy.jpg",
            name: "Quincy Market",
            rank:"4",
            address:"4 South Market Street, Boston, MA",
            official:"http://www.quincy-market.com",
            phone:"617-523-1300",
            description:"Quincy Market is a historic market complex near Faneuil Hall in downtown Boston, Massachusetts. It was constructed in 1824–26 and named in honor of Mayor Josiah Quincy, who organized its construction without any tax or debt. The market was designated a National Historic Landmark, recognizing its significance as one of the largest market complexes built in the United States in the first half of the 19th century."
        },
        { _id: "5",
            type:"2",
            image:"./image/5charlesriver.jpg",
            name: "Charles River",
            rank:"5",
            address:"Beacon St & Arlington St, Boston, MA",
            official:"http://www.crwa.org/#_=_",
            phone:"617-635-4505",
            description:"Charles river is well known for its rowing, sculling, dragonboating, and sailing, both recreational and competitive. The river may also be kayaked; depending on the season, however, kayakers can only navigate the Charles by getting out and dragging their kayaks for significant stretches. The 'Lower Basin' between the Longfellow and Harvard bridges is home to Community Boating, the Harvard University Sailing Center, and the MIT Sailing Pavilion. The Head of the Charles Regatta is held here every October. In early June, the annual Hong Kong Boston Dragon boat Festival is held in Cambridge, near the Weeks Footbridge."
        },
        { _id: "6",
            type:"2",
            image:"./image/6trinity.jpg",
            name: "Trinity Church",
            rank:"6",
            address:"206 Clarendon Street, Boston, MA",
            official:"http://trinitychurchboston.org/",
            phone:"617-536-0944",
            description:"Trinity Church is a thriving Christian community in the heart of Boston's Back Bay, and a member parish of the American Episcopal Church. Housed in a grand and historic building consistently ranked as one of America's most significant architectural landmarks, we are also a parish family drawing members from Boston and much of eastern Massachusetts."
        },
        { _id: "7",
            type:"2",
            image:"./image/7library.jpg",
            name: "Boston Public Library",
            rank:"7",
            address:"700 Boylston St, Boston, MA",
            official:"http://bpl.org/central/",
            phone:"617-536-5400",
            description:"The Boston Public Library is a municipal public library system in Boston, Massachusetts, United States, founded in 1848. The Boston Public Library is also the Library for the Commonwealth (formerly library of last recourse) of the Commonwealth of Massachusetts; all adult residents of the commonwealth are entitled to borrowing and research privileges, and the library receives state funding. The Boston Public Library contains approximately 23 million items encompassing all formats including books, DVDs, CDs, maps, music scores, microfilm, manuscripts, prints and other visual materials, and electronic resources, making it the second-largest public library in the United States behind only the Library of Congress."
        },
        { _id: "8",
            type:"2",
            image:"./image/8MFA.jpg",
            name: "Museum of Fine Arts",
            rank:"8",
            address:"465 Huntington Avenue, Boston, MA",
            official:"http://www.mfa.org/",
            phone:"617-267-9300",
            description:"The MFA is one of the most comprehensive art museums in the world; the collection encompasses nearly 500,000 works of art. We welcome more than one million visitors each year to experience art from ancient Egyptian to contemporary, special exhibitions, and innovative educational programs. The Museum has undergone significant expansion and change in recent years; 2010 marked the opening of the Art of the Americas Wing, with four levels of American art from ancient to modern. In 2011, the west wing of the Museum was transformed into the Linde Family Wing for Contemporary Art, with new galleries for contemporary art and social and learning spaces. Improved and new galleries for European, Asian, and African art have opened through 2013, with more to come."
        },
        { _id: "9",
            type:"3",
            image:"./image/9bostonCommon.jpg",
            name: "Boston Common",
            rank:"9",
            address:"131 Tremont St, Boston, MA",
            official:"http://www.cityofboston.gov/freedomtrail/bostoncommon.asp",
            phone:"617-635-4500",
            description:"The starting point of the Freedom Trail, Boston Common is the oldest park in the country. The park is almost 50 acres in size. Today, Boston Common is the anchor for the Emerald Necklace, a system of connected parks that winds through many of Boston's neighborhoods. The 'Common' has been used for many different purposes throughout its long history. Until 1830, cattle grazed the Common, and until 1817, public hangings took place here. British troops camped on Boston Common prior to the Revolution and left from here to face colonial resistance at Lexington and Concord in April, 1775. Celebrities, including Martin Luther King Jr., Pope John Paul II, and Gloria Steinem (advocate of the feminist revolution), have given speeches at the Common."

        },
        { _id: "10",
            type:"3",
            image:"./image/10copley.jpeg",
            name: "Copley Square",
            rank:"10",
            address:"Copley Square, Huntington Avenue, Boston, MA",
            official:"http://www.massvacation.com/blog/2014/03/the-charms-of-copley-square/",
            phone:"617-536-9000",
            description:"If you’ve been to Boston once, you’ve most likely set foot in Copley Square. Located at the heart of the city, it is dedicated to that most illustrious native son, that painter of portraits, the one and only John Singleton Copley. As a place dedicated to an artist, it is a place for all walks to gather and commune. Perhaps on a fall day, you will come and buy some apples from local farmers. On another day, you might stop by for a bit of outdoor entertainment. But why stop by for just another afternoon or a lunch break? The delights of Copley Square are best enjoyed as part of a long, luxurious weekend and here’s what you should do during those days and nights."
        },
        { _id: "11",
            type:"3",
            image:"./image/11prudential.jpg",
            name: "Prudential Tower",
            rank:"11",
            address:"800 Boylston St#50, Boston, MA",
            official:"http://www.prudentialcenter.com/",
            phone:"617-859-0648",
            description:"Visit the Skywalk Observatory at Prudential Tower, Boston's only sky-high vantage point for sweeping 360 degree views of Greater Boston and beyond. Let your eyes and ears do the walking as you experience the exclusive state-of-the-art Acoustiguide audio tour detailing the city's many points of historic and cultural interest. Audio guides are provided in the following languages: English, Spanish, Dutch, French, Japanese and Mandarin."
        },
        { _id: "12",
            type:"3",
            image:"./image/4fenway.jpg",
            name: "Fenway Park",
            rank:"12",
            address:"4 Yawkey Way, Boston, MA",
            official:"http://boston.redsox.mlb.com/index.jsp?c_id=bos",
            phone:"617-226-6666",
            description:"'America's Most Beloved Ballpark' is uniquely nestled in the city of Boston. Fenway Park is a place where dreams are made, traditions are celebrated and baseball is forever. See the home of Red Sox Legends, Williams, Yaz, Fisk and Rice. Visit Pesky's Pole and sit atop the world famous Green Monster which stands 37 feet 2 inches high overlooking leftfield. Our experienced tour guides will provide a thrilling, one hour, walking tour of Fenway Park. Bilingual tours are available in Spanish and Japanese with advance notice. We welcome all fans to Fenway Park, home of the Boston Red Sox and the pulse of Red Sox Nation."
        }
    ];
    var guide=[
        { _id: "1",
            userName:"Marina K",
            userPhoto:"./image/marina-k.jpg",
            image:"./image/guide1.jpg",
            name: "3 Days in Boston",
            description:"From loads of history to delicious eating, Boston is packed with 'must-sees'. Here are the highlights that will give you a good taste of Boston in just three days."
        },
        { _id: "2",
            userName:"Vincent M",
            userPhoto:"./image/vincent-m.jpg",
            image:"./image/guideoutdoor.jpg",
            name: "Guide to Boston Outdoors",
            description:"Hiking, biking, kayaking, walking... Boston is a great city for exploring the great outdoors. Here are some of my favorite 'fresh-air spots' in the city and the surrounding areas."
        },
        { _id: "3",
            userName:"Kevin R",
            userPhoto:"./image/kevin-r.jpg",
            image:"./image/guide3.jpg",
            name: "Afternoon Tour of Boston",
            description:"Hopefully this guide will help find some cool things to do while in the city for the day and help you see what Boston is all about."
        }
    ];
    var eat=[
        { "_id": "1",
            "type": "1" ,
            "image":"./image/eat2.jpg",
            "name": "Giacomo's Ristorante",
            "style": "Italian",
            "price": "$$",
            "stars":"5",
            "url":"http://www.yelp.com/biz/giacomos-ristorante-boston",
            "address":"355 Hanover St."
        },
        { "_id": "2",
            "type": "1" ,
            "image":"./image/eat3.jpg",
            "name": "Neptune Oyster",
            "style": "Seafood",
            "price": "$$",
            "stars":"5",
            "url":"http://www.yelp.com/biz/neptune-oyster-boston",
            "address":"63 Salem St."
        },
        { "_id": "3",
            "type": "1" ,
            "image":"./image/eat4.jpg",
            "name": "O Ya",
            "style": "Japanese",
            "price": "$$$$",
            "stars":"5",
            "url":"http://www.yelp.com/biz/o-ya-boston",
            "address":"9 East St. Pl"
        },
        { "_id": "4",
            "type": "1" ,
            "image":"./image/eat5.jpg",
            "name": "James Hook & Co",
            "style": "Seafood",
            "price": "$$",
            "stars":"4",
            "url":"http://www.yelp.com/biz/james-hook-and-co-boston",
            "address":"440 Atlantic Ave"
        },
        { "_id": "5",
            "type": "2" ,
            "image":"./image/dessert1.jpg",
            "name": "Mike's Pastry",
            "style": "Ice Cream",
            "price": "$",
            "stars":"4",
            "url":"http://www.yelp.com/biz/mikes-pastry-boston",
            "address":"300 Hanover St."
        },
        { "_id": "6",
            "type": "2" ,
            "image":"./image/dessert2.jpg",
            "name": "Picco",
            "style": "Ice Cream",
            "price": "$$",
            "stars":"4",
            "url":"http://www.yelp.com/biz/picco-boston-2",
            "address":"513 Tremont St."
        },
        { "_id": "7",
            "type": "2" ,
            "image":"./image/dessert3.jpg",
            "name": "Cafe Madeleine",
            "style": "Bakery",
            "price": "$",
            "stars":"5",
            "url":"http://www.yelp.com/biz/cafe-madeleine-boston-2",
            "address":"517 Columbus Ave"
        },
        { "_id": "8",
            "type": "2" ,
            "image":"./image/dessert4.jpg",
            "name": "Modern Pastry Shop",
            "style": "Bakery",
            "price": "$",
            "stars":"4",
            "url":"http://www.yelp.com/biz/modern-pastry-shop-boston",
            "address":"257 Hanover St."
        },
        { "_id": "9",
            "type": "3" ,
            "image":"./image/fast1.jpg",
            "name": "Uburger",
            "style": "Burgers",
            "price": "$",
            "stars":"4",
            "url":"http://www.yelp.com/biz/uburger-boston-9",
            "address":"Kenmore Sq 636 Beacon St."
        },
        { "_id": "10",
            "type": "3" ,
            "image":"./image/fast2.jpg",
            "name": "Shake Shack",
            "style": "Hot Dogs",
            "price": "$$",
            "stars":"3",
            "url":"http://www.yelp.com/biz/shake-shack-boston?osq=Shake+Shack",
            "address":"234 Newbury St."
        },
        { "_id": "11",
            "type": "3" ,
            "image":"./image/fast3.jpg",
            "name": "Chicken Lou's",
            "style": "Sandwiches",
            "price": "$",
            "stars":"4",
            "url":"http://www.yelp.com/search?find_desc=Chicken+Lou%27s&find_loc=Boston%2C+MA&ns=1",
            "address":"50 Forsyth St."
        },
        { "_id": "12",
            "type": "3" ,
            "image":"./image/fast4.jpg",
            "name": "Beta Burger",
            "style": "Burgers",
            "price": "$",
            "stars":"5",
            "url":"http://www.yelp.com/biz/beta-burger-boston",
            "address":"1437 Tremont St."
        }
    ];
    var hotels=[
        { "_id": "1",
            "type": "1" ,
            "image":"./image/hotel1.jpg",
            "name": "The Godfrey Hotel Boston",
            "price": "347",
            "stars":"4",
            "address":"505 Washington Street, Theater District",
            "booking":"http://www.booking.com/hotel/us/the-godfrey-boston.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-06-28;checkout=2016-06-29;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=140465704_91315786_0_0_0;hpos=1;room1=A%2CA;sb_price_type=total;srfid=6df9d49cced899e06b89c1280dc0c6ffae433cdeX1;type=total;ucfs=1&"
        },
        { "_id": "2",
            "type": "1" ,
            "image":"./image/hotel2.jpg",
            "name": "DoubleTree Suites by Hilton",
            "price": "167",
            "stars":"3",
            "address":"400 Soldier Field Road, Allston",
            "booking":"http://www.booking.com/hotel/us/doubletree-guest-suites-boston.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-06-28;checkout=2016-06-29;dest_id=20061717;dest_type=city;dist=0;group_adults=2;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;soldout=0%2C0;srfid=8bc4fd215d8dff5d8eff0258a0416666696d4a4dX1;type=total;ucfs=1&"
        },
        { "_id": "3",
            "type": "1" ,
            "image":"./image/hotel3.jpg",
            "name": "Residence Inn Back Bay",
            "price": "280",
            "stars":"3",
            "address":"125 Brookline Avenue, Fenway Kenmore",
            "booking":"http://www.booking.com/hotel/us/residence-inn-boston-back-bay-fenway.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=53554403_91475770_0_1_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;srfid=4444b51c92733f31558bfaea472ac5b2f8c60988X1;type=total;ucfs=1&"
        },
        { "_id": "4",
            "type": "1" ,
            "image":"./image/hotel4.jpg",
            "name": "Harborside Inn",
            "price": "229",
            "stars":"3",
            "address":"185 State Street, Financial District",
            "booking":"http://www.booking.com/hotel/us/harborside.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=5635401_81191727_0_0_0;hpos=1;room1=A%2CA;sb_price_type=total;srfid=81a22e354833d840aba989c4f5e7430a975119c4X1;type=total;ucfs=1&"

        },
        { "_id": "5",
            "type": "2" ,
            "image":"./image/hotel2-1.jpg",
            "name": "The Eliot Suite Hotel",
            "price": "295",
            "stars":"5",
            "address":"370 Commonwealth Avenue, Back Bay",
            "booking":"http://www.booking.com/hotel/us/the-eliot.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=7835403_91294496_0_0_0;hpos=1;room1=A%2CA;sb_price_type=total;srfid=14297e86f66a6813a2077194e5fbcb1d4af0d7bcX1;type=total;ucfs=1&"
        },
        { "_id": "6",
            "type": "2" ,
            "image":"./image/hotel2-2.jpg",
            "name": "Battery Wharf Hotel, Boston Waterfront",
            "price": "239",
            "stars":"5",
            "booking":"http://www.booking.com/hotel/us/battery-wharf-hotel.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=29873102_90850267_2_0_0;hpos=1;room1=A%2CA;sb_price_type=total;srfid=05392eed8cac97a86b171ed0094e49396fe68766X1;type=total;ucfs=1&",
            "address":"3 Battery Wharf, Waterfront"
        },
        { "_id": "7",
            "type": "2" ,
            "image":"./image/hotel2-3.jpg",
            "name": "Four Seasons Boston",
            "price": "595",
            "stars":"5",
            "booking":"http://www.booking.com/hotel/us/four-seasons-boston.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=45466802_88272976_2_0_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;srfid=7ba4761d5318e6c30b28e524c9ed920d273817a8X1;type=total;ucfs=1&",
            "address":"200 Boylston Street"
        },
        { "_id": "8",
            "type": "2" ,
            "image":"./image/hotel2-4.jpg",
            "name": "Fairmont Copley Plaza",
            "price": "287",
            "stars":"5",
            "booking":"http://www.booking.com/hotel/us/fairmont-copley-plaza.en-us.html?aid=355697;label=guid_23a8fd83-950c-cdd7-dcc0-b1535b6fc2e0_datetime_14556823518978_cityid_8387_hotelid_265516;sid=d9fbdca2636a358333eed8fb70967417;dcid=12;checkin=2016-07-06;checkout=2016-07-07;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=5756301_91822785_2_0_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;srfid=a4df46a2a4fa794203aa375816935db3dfc05c18X1;type=total;ucfs=1&",
            "address":"138 Saint James Avenue, Back Bay"
        },
        { "_id": "9",
            "type": "3" ,
            "image":"./image/hotel3-1.jpg",
            "name": "Boston Hotel Buckminster",
            "price": "200",
            "stars":"3",
            "address":"645 Beacon Street, Fenway Kenmore",
            "booking":"http://www.booking.com/hotel/us/buckminster.zh-cn.html?aid=304142;label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=7679301_88767979_0_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X2;type=total;ucfs=1&"
        },
        { "_id": "10",
            "type": "3" ,
            "image":"./image/hotel3-2.jpg",
            "name": "Hotel 140",
            "price": "219",
            "stars":"3",
            "address":"140 Clarendon Street, Back Bay",
            "booking":"http://www.booking.com/hotel/us/140.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24&checkout=2016-06-25&dest_id=20061717&dest_type=city&group_adults=2&highlighted_blocks=18113101_88895135_0_0_0&nflt=class%3D3&room1=A%2CA&sb_price_type=total&srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X1&type=total&ucfs=1&"
        },
        { "_id": "11",
            "type": "3" ,
            "image":"./image/hotel2.jpg",
            "name": "DoubleTree Suites by Hilton",
            "price": "167",
            "stars":"3",
            "address":"400 Soldier Field Road, Allston",
            "booking":"http://www.booking.com/hotel/us/doubletree-guest-suites-boston.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=2876502_487555_2_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X5;type=total;ucfs=1&"
        },
        { "_id": "12",
            "type": "3" ,
            "image":"./image/hotel3-4.jpg",
            "name": "The Verb Hotel",
            "price": "179",
            "stars":"3",
            "address":"1271 Boylston Street, Fenway Kenmore",
            "booking":"http://www.booking.com/hotel/us/doubletree-guest-suites-boston.html?label=gen173nr-1DEgJnbzIFaG90ZWxCAlhYSDNiBW5vcmVmcgV1c19uaogBAZgBMrgBDMgBDNgBA-gBAfgBAqgCAw;sid=d9fbdca2636a358333eed8fb70967417;dcid=4;checkin=2016-06-24;checkout=2016-06-25;dest_id=20061717;dest_type=city;dist=0;group_adults=2;highlighted_blocks=2876502_487555_2_0_0;nflt=class%3D3;room1=A%2CA;sb_price_type=total;srfid=d9e66f22b5c2410c3b979c9152a0363cc87e8391X5;type=total;ucfs=1&"
        }
    ];

    app.get("/BostonTrip/api/attraction",findAttraction);
    app.get("/BostonTrip/api/guide",findGuide);
    app.get("/BostonTrip/api/eat",findEat);
    app.get("/BostonTrip/api/hotels",findHotels);
    app.get("/BostonTrip/api/attraction/:attractionId",findAttractionsById);

    app.get("/BostonTrip/api/:userId/like/attractions",findLikeAttractions);
    app.post("/BostonTrip/api/likeAttraction",likeAttraction);
    app.delete("/BostonTrip/api/:userId/dislike/attractions/:attractionId",dislikeAttraction);

    app.get("/BostonTrip/api/:userId/like/hotels",findLikeHotels);
    app.post("/BostonTrip/api/likeHotel",likeHotel);
    app.delete("/BostonTrip/api/:userId/dislike/hotels/:attractionId",dislikeHotel);

    app.get("/BostonTrip/api/:userId/like/eats",findLikeEats);
    app.post("/BostonTrip/api/likeEat",likeEat);
    app.delete("/BostonTrip/api/:userId/dislike/eats/:attractionId",dislikeEats);

    app.get("/BostonTrip/api/:userId/like/guides",findLikeGuides);
    app.post("/BostonTrip/api/likeGuide",likeGuide);
    app.delete("/BostonTrip/api/:userId/dislike/guides/:attractionId",dislikeGuides);
    app.get("/BostonTrip/api/guide/:guideId",findGuidesById);

    app.post("/BostonTrip/api/comment",createComment);
    app.get("/BostonTrip/api/guide/:guideId/comments",findCommentsByGid);

    app.post("/BostonTrip/api/followOther",followOther);
    app.get("/BostonTrip/api/:userId/follows",findFollowsByUserId);
    app.get("/BostonTrip/api/:userId/followers",findFollowersByUserId);
    app.delete("/BostonTrip/api/:userId/unFollow/:followId",unFollow);
    app.delete("/BostonTrip/api/comment/delete/:commentId",deleteComment);


    function findAttraction(req,res){
        res.send(attraction);
    }
    function findGuide(req,res){
        res.send(guide);
    }
    function findEat(req,res){
        res.send(eat);
    }
    function findHotels(req,res){
        res.send(hotels);
    }
    function findAttractionsById(req,res){
        var attractionId=req.params.attractionId;
        for(var i in attraction){
            if(attraction[i]._id===attractionId){
                res.send(attraction[i]);
            }
        }
        // return null;
        }

    function likeAttraction(req,res){
        var attraction=req.body;
        var favoriteId=attraction.favoriteId;
        var userId=attraction.userId;

        BLikeAttractionModel
            .findLikeAttractionsById(favoriteId,userId)
            .then(
                function(attractionExist){
                    if(attractionExist&&attractionExist.userId===attraction.userId){
                        res.status(404).send("Already Exists!");
                        return;
                    }
                    else{
                        return BLikeAttractionModel
                            .likeAttraction(attraction);
                    }
                }
            )
            .then(
                function(attractions){
                    res.json(attractions);
                },
                function(error){
                    res.send(400);
                }
            );
        //
        // BLikeAttractionModel.likeAttraction(attraction)
        //     .then(
        //         function(attractions){
        //             res.json(attractions);
        //         },
        //         function(error){
        //             res.send(400);
        //         }
        //     );
    }
    function dislikeAttraction(req,res){
        var favoriteId=req.params.attractionId;
        var userId=req.params.userId;
        BLikeAttractionModel
            .dislikeAttractions(favoriteId,userId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function findLikeAttractions(req,res){
        var userId=req.params.userId;
        var userAttractions=[];
        BLikeAttractionModel
            .findLikeAttractions(userId)
            .then(
                function(attractions){
                    // console.log(attractions);
                    for(var a in attractions){
                        for(var i in attraction){
                            if(attraction[i]._id===attractions[a].favoriteId){
                                // test=attraction[i];
                                userAttractions.push(attraction[i]);
                            }
                        }
                    }
                    res.send(userAttractions);
                }
            );
    }

    function likeHotel(req,res){
        var attraction=req.body;
        var favoriteId=attraction.favoriteId;
        var userId=attraction.userId;

        BLikeHotelModel
            .findLikeAttractionsById(favoriteId,userId)
            .then(
                function(attractionExist){
                    if(attractionExist&&attractionExist.userId===attraction.userId){
                        res.status(404).send("Already Exists!");
                        return;
                    }
                    else{
                        return BLikeHotelModel
                            .likeAttraction(attraction);
                    }
                }
            )
            .then(
                function(attractions){
                    res.json(attractions);
                },
                function(error){
                    res.send(400);
                }
            );
        //
        // BLikeAttractionModel.likeAttraction(attraction)
        //     .then(
        //         function(attractions){
        //             res.json(attractions);
        //         },
        //         function(error){
        //             res.send(400);
        //         }
        //     );
    }
    function findLikeHotels(req,res){
        var userId=req.params.userId;
        var userHotels=[];
        BLikeHotelModel
            .findLikeAttractions(userId)
            .then(
                function(attractions){
                    for(var a in attractions){
                        for(var i in hotels){
                            if(hotels[i]._id===attractions[a].favoriteId){
                                userHotels.push(hotels[i]);
                            }
                        }
                    }
                    res.send(userHotels);
                }
            );
    }
    function dislikeHotel(req,res){
        var favoriteId=req.params.attractionId;
        var userId=req.params.userId;
        BLikeHotelModel
            .dislikeAttractions(favoriteId,userId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function likeEat(req,res){
        var attraction=req.body;
        var favoriteId=attraction.favoriteId;
        var userId=attraction.userId;

        BLikeEatModel
            .findLikeAttractionsById(favoriteId,userId)
            .then(
                function(attractionExist){
                    if(attractionExist&&attractionExist.userId===attraction.userId){
                        res.status(404).send("Already Exists!");
                        return;
                    }
                    else{
                        return BLikeEatModel
                            .likeAttraction(attraction);
                    }
                }
            )
            .then(
                function(attractions){
                    res.json(attractions);
                },
                function(error){
                    res.send(400);
                }
            );
    }
    function findLikeEats(req,res){
        var userId=req.params.userId;
        var userEats=[];
        BLikeEatModel
            .findLikeAttractions(userId)
            .then(
                function(attractions){
                    for(var a in attractions){
                        for(var i in eat){
                            if(eat[i]._id===attractions[a].favoriteId){
                                userEats.push(eat[i]);
                            }
                        }
                    }
                    res.send(userEats);
                }
            );
    }
    function dislikeEats(req,res){
        var favoriteId=req.params.attractionId;
        var userId=req.params.userId;
        BLikeEatModel
            .dislikeAttractions(favoriteId,userId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function likeGuide(req,res){
        var attraction=req.body;
        var favoriteId=attraction.favoriteId;
        var userId=attraction.userId;

        BLikeGuideModel
            .findLikeAttractionsById(favoriteId,userId)
            .then(
                function(attractionExist){
                    if(attractionExist&&attractionExist.userId===attraction.userId){
                        res.status(404).send("Already Exists!");
                        return;
                    }
                    else{
                        return BLikeGuideModel
                            .likeAttraction(attraction);
                    }
                }
            )
            .then(
                function(attractions){
                    res.json(attractions);
                },
                function(error){
                    res.send(400);
                }
            );
    }
    function findLikeGuides(req,res){
        var userId=req.params.userId;
        var userGuides=[];
        BLikeGuideModel
            .findLikeAttractions(userId)
            .then(
                function(attractions){
                    for(var a in attractions){
                        for(var i in guide){
                            if(guide[i]._id===attractions[a].favoriteId){
                                userGuides.push(guide[i]);
                            }
                        }
                    }
                    res.send(userGuides);
                }
            );
    }
    function dislikeGuides(req,res){
        var favoriteId=req.params.attractionId;
        var userId=req.params.userId;
        BLikeGuideModel
            .dislikeAttractions(favoriteId,userId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function findGuidesById(req,res){
        var guideId=req.params.guideId;
        for(var i in guide){
            if(guide[i]._id===guideId){
                res.send(guide[i]);
            }
        }
    }

    function createComment(req,res){
        var comment = req.body;
        var userId=comment.userId;
        BUserModel
            .findUserById(userId)
            .then(
                function(user){
                    var username=user.username;
                    var plusUsername={
                        userName:username,
                        userComment:comment.userComment,
                        userId:comment.userId,
                        guideId:comment.guideId
                    };
                    BCommentModel
                        .createComment(plusUsername)
                        .then(
                            function(comment){
                                res.json(comment);
                            },
                            function(error){
                                res.send(400);
                            }
                        );
                }
            )
    }

    function findCommentsByGid(req,res){
        var guideId=req.params.guideId;
        BCommentModel
            .findGuideComments(guideId)
            .then(
                function(comments){
                    res.send(comments);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function followOther(req,res){
        var follow=req.body;
        var followId=follow.follow;
        var followerId=follow.follower;
        BFollowModel
            .findFollowsById(followId,followerId)
            .then(
                function(followExist){
                    if(followExist&&followExist.follower===follow.follower){
                        res.status(404).send("Already Followed!");
                        return;
                    }
                    else{
                        BUserModel
                            .findUserById(followerId)
                            .then(
                                function(user){
                                    var username=user.username;
                                    var plusUsername={
                                        follow:follow.follow,
                                        followName:follow.followName,
                                        follower:follow.follower,
                                        followerName:username
                                    };
                                    return BFollowModel
                                        .followUser(plusUsername);
                                }

                            )

                    }
                }
            )
            .then(
                function(follows){
                    res.json(follows);
                },
                function(error){
                    res.send(400);
                }
            );
    }

    function findFollowsByUserId(req,res){
        var userId=req.params.userId;
        BFollowModel
            .findFollowsByUserId(userId)
            .then(
                function(follows){
                    res.send(follows);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function findFollowersByUserId(req,res){
        var userId=req.params.userId;
        BFollowModel
            .findFollowersByUserId(userId)
            .then(
                function(follows){
                    res.send(follows);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }

    function unFollow(req,res){
        var followId=req.params.followId;
        var userId=req.params.userId;
        BFollowModel
            .unFollowUser(followId,userId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
    function deleteComment(req,res){
        var commentId=req.params.commentId;
        BCommentModel
            .deleteComments(commentId)
            .then(
                function(stats){
                    res.send(200);
                },
                function(error){
                    res.statusCode(404).send(error);
                }
            );
    }
};