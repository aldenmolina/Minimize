using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class GoalConroller : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Goals",
                columns: table => new
                {
                    GoalId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Date = table.Column<string>(nullable: true),
                    Text = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Goals", x => x.GoalId);
                });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "Date", "Text" },
                values: new object[] { 1, "4/12/2019", "Dont Go to Steelers Game!!!" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "Date", "Text" },
                values: new object[] { 2, "4/11/2019", "Clean up closet" });

            migrationBuilder.InsertData(
                table: "Goals",
                columns: new[] { "GoalId", "Date", "Text" },
                values: new object[] { 3, "4/11/2019", "Donate kitchen supplies" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Goals");
        }
    }
}
