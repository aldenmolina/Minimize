using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Minimize.Migrations
{
    public partial class updateSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 4);

            migrationBuilder.InsertData(
                table: "Badges",
                columns: new[] { "BadgeId", "BadgeDescription", "BadgeName" },
                values: new object[] { 16, "You have removed 1,000 items!", "It's getting serious" });

            migrationBuilder.InsertData(
                table: "Badges",
                columns: new[] { "BadgeId", "BadgeDescription", "BadgeName" },
                values: new object[] { 17, "You have removed 100,000 items!", "Wild Thang" });

            migrationBuilder.InsertData(
                table: "Badges",
                columns: new[] { "BadgeId", "BadgeDescription", "BadgeName" },
                values: new object[] { 18, "Congratulations! You have removed 1,000,000 items!", "Millionaire" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Badges",
                keyColumn: "BadgeId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Badges",
                keyColumn: "BadgeId",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Badges",
                keyColumn: "BadgeId",
                keyValue: 18);

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "PostId", "CategoryId", "PostDescription", "PostImgPath", "PostTime", "RemovedItems", "TotalItems" },
                values: new object[,]
                {
                    { 1, 1, "I have been wanting to get rid of my shoes. I have way to many but it's hard to decide :(", "/Images/Shos.jpg", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 15 },
                    { 2, 2, "I have had this Christmas Story Leg Lamp for eternity. It feels like I only have it because I live in Cleveland. I don't really see any other reason to have it.", "/Images/Lamp.jpg", new DateTime(2019, 11, 20, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 1 },
                    { 3, 3, "Not really sure what this is or how to even use it.", "/Images/tool.jpg", new DateTime(2019, 12, 21, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 1 },
                    { 4, 4, "I was planning on keeping this ancient thing and hopefully sell it but nobody wants it", "/Images/ibm.jpg", new DateTime(2019, 10, 9, 0, 0, 0, 0, DateTimeKind.Unspecified), 1, 1 }
                });
        }
    }
}
