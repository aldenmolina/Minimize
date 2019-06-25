using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class AllData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Badges",
                columns: table => new
                {
                    BadgeId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    BadgeName = table.Column<string>(nullable: true),
                    BadgeDescription = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Badges", x => x.BadgeId);
                });

            migrationBuilder.CreateTable(
                name: "Categories",
                columns: table => new
                {
                    CategoryId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    CategoryName = table.Column<string>(nullable: true),
                    CategoryDescription = table.Column<string>(nullable: true),
                    CategoryImg = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categories", x => x.CategoryId);
                });

            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    PostId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    TotalItems = table.Column<int>(nullable: false),
                    RemovedItems = table.Column<int>(nullable: false),
                    PostDescription = table.Column<string>(nullable: true),
                    PostImgPath = table.Column<string>(nullable: true),
                    CategoryId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.PostId);
                    table.ForeignKey(
                        name: "FK_Posts_Categories_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Categories",
                        principalColumn: "CategoryId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Badges",
                columns: new[] { "BadgeId", "BadgeDescription", "BadgeName" },
                values: new object[,]
                {
                    { 1, "You successfully joined Minimize!", "Welcome!" },
                    { 15, "You removed 50 total items", "Peace" },
                    { 14, "You removed 35 total items", "Tiny World" },
                    { 13, "You removed 20 total items", "Minimizer" },
                    { 12, "You removed 10 total items", "Novice" },
                    { 10, "You removed a post", "Real Minimalist" },
                    { 9, "You removed an item from each category", "Jack of Trades" },
                    { 11, "You removed 5 total items", "First steps" },
                    { 7, "You removed your first toy item", "Get Serious" },
                    { 6, "You removed your first electronic item", "Overload!" },
                    { 5, "You removed your first tool item", "Not-So-Handy" },
                    { 4, "You removed your first furniture item", "Heavy Load" },
                    { 3, "You removed your first clothing item", "Au Naturel" },
                    { 2, "You made your first post", "First Timer" },
                    { 8, "You removed your first misc item", "Only Necessities" }
                });

            migrationBuilder.InsertData(
                table: "Categories",
                columns: new[] { "CategoryId", "CategoryDescription", "CategoryImg", "CategoryName" },
                values: new object[,]
                {
                    { 5, " When your kid outgrows toys—or when you’ve reached the point where you just can’t even with Elsa’s Frozen musical snow wand—there are lots of kid-oriented nonprofits that will find them a new home. Check out Toys for Tots, Second Chance Toys, and DonationTown’s toy pickup. ", "truck-monster", "Toys" },
                    { 1, " There is no shortage when it comes to clothing donation opportunities. Goodwill and Salvation Army are well-known options, but local shelters and outreach programs may also welcome gently used clothing. Dress for Success is a nonprofit that helps women achieve economic independence by providing professional attire. In some states the Vietnam Veterans of America will come to your home to pick up used clothing.", "tshirt", "Clothing" },
                    { 2, " Just want it gone? Listing your furniture in the Craigslist “Free” section will often get you a pickup in an hour or two. If that doesn’t work, you can pay for 1-800-Got-Junk to pick up and responsibly dispose of your stuff. And, of course, you can donate your furniture to The National Furniture Bank, Goodwill, and Salvation Army. DonationTown is also a great listing of nonprofits that will pick your furniture donation up.", "couch", "Furniture" },
                    { 3, " If you’ve got paint, tools, or building supplies that need a new home, Habitat for Humanity is a great place to donate. Check their website for a location in your area.", "tools", "Tools" },
                    { 4, "Tech hardware is a nasty environmental hazard if disposed of incorrectly. Luckily there are lots of options for responsibly dispatching your old laptops and cellphones into the gadget beyond. If your old phone doesn’t qualify for a buyback credit, all of the major mobile carriers in the US—Sprint, Verizon, T-Mobile, and AT&T—will accept cell phones for recycling or refurbishing. Many have programs that pass the phones along to active duty soldiers or victims of domestic violence.For other items(computers, tablets, Bluetooth headsets, ink / toner, batteries, cameras, etc.),check out the recycling programs at Best Buy, Staples, Office Depot and OfficeMax.Tech vendors like Apple, Dell, HP, Samsung and Sony also have recycling programs for their products. Don’t forget to wipe your personal information off of devices before parting with them.", "laptop", "Electronics" },
                    { 6, "If you’re downsizing and have stuff you only use occasionally but want to keep (think camping gear, Christmas decorations, snowboards, strollers, suitcases, antique stamp collections, etc.), look into innovative on-demand storage from companies like Omni (currently available in San Francisco, but expanding soon), Clutter (California and New York), and Closetbox (45 metropolitan areas). These companies pick up and store your stuff (in addition to uploading pictures of your items to a “virtual” storage container). When you need an item, they deliver it to your door.", "question", "Misc" }
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "RemovedItems", "TotalItems" },
                values: new object[,]
                {
                    { 1, 1, "I have been wanting to get rid of my shoes. I have way to many but it's hard to decide :(", "/Images/Shos.jpg", 1, 15 },
                    { 2, 2, "I have had this Christmas Story Leg Lamp for eternity. It feels like I only have it because I live in Cleveland. I don't really see any other reason to have it.", "/Images/Lamp.jpg", 1, 1 },
                    { 3, 3, "Not really sure what this is or how to even use it.", "/Images/tool.jpg", 1, 1 },
                    { 4, 4, "I was planning on keeping this ancient thing and hopefully sell it but nobody wants it", "/Images/ibm.jpg", 1, 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Posts_CategoryId",
                table: "Posts",
                column: "CategoryId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Badges");

            migrationBuilder.DropTable(
                name: "Posts");

            migrationBuilder.DropTable(
                name: "Categories");
        }
    }
}
