import whiteCatOptimized from "../static/white-cat-optimized.jpg"
import cupcakeOptimized from "../static/cupcake-optimized.jpg"

interface Blog {
  title: string
  image: any
  author: string
  date: string
  post: string
}

const Blogs: Blog[] = [
  {
    title: "A new post",
    image: whiteCatOptimized,
    author: "Anna Migas",
    date: new Date().toDateString(),
    post: `Kitty scratches couch bad kitty murder hooman toes meow all night having their mate disturbing sleeping humans but head nudges but ooh, are those your $250 dollar sandals? lemme use that as my litter box. Knock over christmas tree my water bowl is clean and freshly replenished, so i'll drink from the toilet. Kitty scratches couch bad kitty get my claw stuck in the dog's ear for hiiiiiiiiii feed me now stand in doorway, unwilling to chose whether to stay in or go out head nudges loves cheeseburgers or pretend you want to go out but then don't. Run around the house at 4 in the morning. When in doubt, wash weigh eight pounds but take up a full-size bed push your water glass on the floor for hack up furballs instantly break out into full speed gallop across the house for no reason. Hide when guests come over rub against owner because nose is wet meow for food, then when human fills food dish, take a few bites of food and continue meowing for purrrrrr so scratch me there, elevator butt meow all night having their mate disturbing sleeping humans push your water glass on the floor. Under the bed. Love to play with owner's hair tie cough hairball on conveniently placed pants, yet bring your owner a dead bird human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!, meow meow, i tell my human this human feeds me, i should be a god. Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff. Stare at the wall, play with food and get confused by dust. Grab pompom in mouth and put in water dish do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life but purr while eating yet stare at wall turn and meow stare at wall some more meow again continue staring and cat sit like bread yet refuse to drink water except out of someone's glass. `,
  },
  {
    title: "Candy Post",
    image: cupcakeOptimized,
    author: "Julie Kisby",
    date: new Date().toDateString(),
    post: `Cake toffee sugar plum cotton candy dragée. Cheesecake candy canes sesame snaps jelly-o chocolate marzipan chocolate. Cake cotton candy caramels wafer bear claw toffee jelly-o lemon drops. Croissant oat cake gingerbread carrot cake gummi bears toffee brownie jelly-o. Cotton candy sesame snaps candy canes jelly-o icing. Chupa chups dessert tootsie roll.

    Cheesecake gummies icing tart cake. Biscuit fruitcake topping jelly-o candy canes gummies. Jelly beans marshmallow candy canes carrot cake tart powder pastry tiramisu cake. Cookie chocolate cake gummi bears soufflé jujubes sweet roll gummi bears jelly-o gummies. Macaroon sweet candy lemon drops jujubes marshmallow brownie. Macaroon lemon drops cake icing soufflé jelly beans. Bonbon toffee jelly beans liquorice cookie. Cheesecake cupcake oat cake pudding candy jelly-o croissant jelly sesame snaps. Dragée jelly beans dessert gummies bear claw danish gummies.

    Fruitcake cookie cookie topping tootsie roll. Powder cotton candy ice cream. Halvah sesame snaps sugar plum croissant candy brownie gummi bears. Lemon drops wafer lemon drops pie pudding tiramisu. Jujubes danish cupcake. Candy canes candy chocolate cake tootsie roll bonbon. Danish gummi bears gummi bears tart dragée powder powder. Bonbon fruitcake cookie dessert bear claw. Cake cupcake powder fruitcake ice cream ice cream.

    Gummi bears cheesecake marshmallow gingerbread gingerbread chocolate bar cheesecake sweet powder. Candy canes candy oat cake pastry icing chocolate cake. Ice cream macaroon lemon drops. Lollipop dessert cake. Cake tart powder. Jelly-o pastry candy canes tiramisu cotton candy candy apple pie. Sweet roll marzipan sweet lemon drops pastry brownie biscuit gummi bears. Cake apple pie apple pie. Chocolate cake donut pie caramels dragée.

    Candy candy canes cookie sweet roll sweet pie. Tart liquorice oat cake pastry sugar plum biscuit candy. Caramels lemon drops cupcake tart cake chocolate bar powder croissant chupa chups. Carrot cake marshmallow cotton candy topping macaroon sweet roll. Biscuit cake tootsie roll tart gingerbread bonbon sweet muffin. Candy jelly beans powder gummies croissant. Cheesecake sesame snaps liquorice. Fruitcake caramels ice cream chocolate cake. Gingerbread jelly-o gingerbread sweet roll. Candy tootsie roll cupcake gummi bears cotton candy.`,
  },
]

export default Blogs
