using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Minimize.Controllers;
using Minimize.Models;
using Minimize.Repositories;

using Xunit;
using NSubstitute;
using System.Collections.Generic;

namespace Minimize.Tests
{
    public class CategoryControllerTests
    {
        CategoryController underTest;
        ICategoryRepository repo;

        public CategoryControllerTests()
        {
            repo = Substitute.For<ICategoryRepository>();
            underTest = new CategoryController(repo);
        }
        [Fact]
         public void  GetAll_Should_Return_All_Categories()
        {
            var expectedmodel = new List<Category>() { new Category() , new Category() , new Category() };
            repo.GetAll().Returns(expectedmodel);

            var result = underTest.GetAll();

            Assert.Equal(3, result.Value.Count());
        }


    }
}
