using Microsoft.EntityFrameworkCore;
using Minimize.Models;


namespace Minimize
{
    public class MinimizeContext : DbContext
    {
        public DbSet<Category> Categories { get; set; }
        public DbSet<Post> Posts { get; set; }
        public DbSet<Badge> Badges { get; set; }
        public DbSet<Goal> Goals { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=minimize;Trusted_Connection=True;";

            optionsBuilder.UseSqlServer(connectionString)
                          .UseLazyLoadingProxies();

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
            new Category()
            {
                CategoryId = 1,
                CategoryName = "Clothing",
                CategoryDescription = " There is no shortage when it comes to clothing donation opportunities. Goodwill and Salvation Army are well-known options, but local shelters and outreach programs may also welcome gently used clothing. Dress for Success is a nonprofit that helps women achieve economic independence by providing professional attire. In some states the Vietnam Veterans of America will come to your home to pick up used clothing.",
                CategoryImg = "tshirt"
            },
            new Category()
            {
                CategoryId = 2,
                CategoryName = "Furniture",
                CategoryDescription = " Just want it gone? Listing your furniture in the Craigslist “Free” section will often get you a pickup in an hour or two. If that doesn’t work, you can pay for 1-800-Got-Junk to pick up and responsibly dispose of your stuff. And, of course, you can donate your furniture to The National Furniture Bank, Goodwill, and Salvation Army. DonationTown is also a great listing of nonprofits that will pick your furniture donation up.",
                CategoryImg = "couch"
            },
            new Category()
            {
                CategoryId = 3,
                CategoryName = "Tools",
                CategoryDescription = " If you’ve got paint, tools, or building supplies that need a new home, Habitat for Humanity is a great place to donate. Check their website for a location in your area.",
                CategoryImg = "tools"
            },
            new Category()
            {
                CategoryId = 4,
                CategoryName = "Electronics",
                CategoryDescription = "Tech hardware is a nasty environmental hazard if disposed of incorrectly. Luckily there are lots of options for responsibly dispatching your old laptops and cellphones into the gadget beyond. If your old phone doesn’t qualify for a buyback credit, all of the major mobile carriers in the US—Sprint, Verizon, T-Mobile, and AT&T—will accept cell phones for recycling or refurbishing. Many have programs that pass the phones along to active duty soldiers or victims of domestic violence." +
                @"For other items(computers, tablets, Bluetooth headsets, ink / toner, batteries, cameras, etc.),check out the recycling programs at Best Buy, Staples, Office Depot and OfficeMax.Tech vendors like Apple, Dell, HP, Samsung and Sony also have recycling programs for their products. Don’t forget to wipe your personal information off of devices before parting with them.",
                CategoryImg = "laptop"
            },
            new Category()
            {
                CategoryId = 5,
                CategoryName = "Toys",
                CategoryDescription = " When your kid outgrows toys—or when you’ve reached the point where you just can’t even with Elsa’s Frozen musical snow wand—there are lots of kid-oriented nonprofits that will find them a new home. Check out Toys for Tots, Second Chance Toys, and DonationTown’s toy pickup. ",
                CategoryImg = "truck-monster"
            },
            new Category()
            {
                CategoryId = 6,
                CategoryName = "Misc",
                CategoryDescription = "If you’re downsizing and have stuff you only use occasionally but want to keep (think camping gear, Christmas decorations, snowboards, strollers, suitcases, antique stamp collections, etc.), look into innovative on-demand storage from companies like Omni (currently available in San Francisco, but expanding soon), Clutter (California and New York), and Closetbox (45 metropolitan areas). These companies pick up and store your stuff (in addition to uploading pictures of your items to a “virtual” storage container). When you need an item, they deliver it to your door.",
                CategoryImg = "question"
            }
            );


            modelBuilder.Entity<Badge>().HasData(

                new Badge()
                {
                    BadgeId = 1,
                    BadgeName = "Welcome!",
                    BadgeDescription = "You successfully joined Minimize!"
                },

                new Badge()
                {
                    BadgeId = 2,
                    BadgeName = "First Timer",
                    BadgeDescription = "You made your first post"
                },

                new Badge()
                {
                    BadgeId = 3,
                    BadgeName = "Au Naturel",
                    BadgeDescription = "You removed your first clothing item"
                },

                new Badge()
                {
                    BadgeId = 4,
                    BadgeName = "Heavy Load",
                    BadgeDescription = "You removed your first furniture item"
                },

                new Badge()
                {
                    BadgeId = 5,
                    BadgeName = "Not-So-Handy",
                    BadgeDescription = "You removed your first tool item"
                },

                new Badge()
                {
                    BadgeId = 6,
                    BadgeName = "Overload!",
                    BadgeDescription = "You removed your first electronic item"
                },

                new Badge()
                {
                    BadgeId = 7,
                    BadgeName = "Get Serious",
                    BadgeDescription = "You removed your first toy item"
                },

                new Badge()
                {
                    BadgeId = 8,
                    BadgeName = "Only Necessities",
                    BadgeDescription = "You removed your first misc item"
                },

                new Badge()
                {
                    BadgeId = 9,
                    BadgeName = "Jack of Trades",
                    BadgeDescription = "You removed an item from each category"
                },

                new Badge()
                {
                    BadgeId = 10,
                    BadgeName = "Real Minimalist",
                    BadgeDescription = "You removed a post"
                },

                new Badge()
                {
                    BadgeId = 11,
                    BadgeName = "First steps",
                    BadgeDescription = "You removed 5 total items"
                },

                new Badge()
                {
                    BadgeId = 12,
                    BadgeName = "Novice",
                    BadgeDescription = "You removed 10 total items"
                },

                new Badge()
                {
                    BadgeId = 13,
                    BadgeName = "Minimizer",
                    BadgeDescription = "You removed 20 total items"
                },

                new Badge()
                {
                    BadgeId = 14,
                    BadgeName = "Tiny World",
                    BadgeDescription = "You removed 35 total items"
                },

                new Badge()
                {
                    BadgeId = 15,
                    BadgeName = "Peace",
                    BadgeDescription = "You removed 50 total items"
                },

                new Badge()
                {
                    BadgeId = 16,
                    BadgeName = "It's getting serious",
                    BadgeDescription = "You have removed 1,000 items!"
                },

                new Badge()
                {
                    BadgeId = 17,
                    BadgeName = "Wild Thang",
                    BadgeDescription = "You have removed 100,000 items!"
                },

                new Badge()
                {
                    BadgeId = 18,
                    BadgeName = "Millionaire",
                    BadgeDescription = "Congratulations! You have removed 1,000,000 items!"
                }

                
                );
            modelBuilder.Entity<Goal>().HasData(
                new Goal()
                {
                    GoalId = 1, //1 clothing 2 furniture 3 tools
                    Date ="4/12/2019",
                    Text ="get rid of Furnitures",
                    NumberOfItems = 10,
                    CategoryId = 1                   
                },
                 new Goal()
                 {
                     GoalId = 2,
                     Date = "4/11/2019",
                     Text = "Clean up closet",
                     NumberOfItems = 4,
                     CategoryId = 1
                     
                 },

                 new Goal()
                 {
                     GoalId = 3,
                     Date = "4/11/2019",
                     Text = "Donate tools",
                     NumberOfItems = 2,
                     CategoryId = 3
                 }

                );
        }
    }
}