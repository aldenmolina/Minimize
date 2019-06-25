using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class modifiedGoal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "Goals",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "NumberOfItems",
                table: "Goals",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Goals",
                keyColumn: "GoalId",
                keyValue: 1,
                columns: new[] { "CategoryId", "NumberOfItems", "Text" },
                values: new object[] { 1, 10, "get rid of Furnitures" });

            migrationBuilder.UpdateData(
                table: "Goals",
                keyColumn: "GoalId",
                keyValue: 2,
                columns: new[] { "CategoryId", "NumberOfItems" },
                values: new object[] { 1, 4 });

            migrationBuilder.UpdateData(
                table: "Goals",
                keyColumn: "GoalId",
                keyValue: 3,
                columns: new[] { "CategoryId", "NumberOfItems", "Text" },
                values: new object[] { 3, 2, "Donate tools" });

            migrationBuilder.CreateIndex(
                name: "IX_Goals_CategoryId",
                table: "Goals",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Goals_Categories_CategoryId",
                table: "Goals",
                column: "CategoryId",
                principalTable: "Categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Goals_Categories_CategoryId",
                table: "Goals");

            migrationBuilder.DropIndex(
                name: "IX_Goals_CategoryId",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "Goals");

            migrationBuilder.DropColumn(
                name: "NumberOfItems",
                table: "Goals");

            migrationBuilder.UpdateData(
                table: "Goals",
                keyColumn: "GoalId",
                keyValue: 1,
                column: "Text",
                value: "Don't Go to Steelers Game!!!");

            migrationBuilder.UpdateData(
                table: "Goals",
                keyColumn: "GoalId",
                keyValue: 3,
                column: "Text",
                value: "Donate kitchen supplies");
        }
    }
}
