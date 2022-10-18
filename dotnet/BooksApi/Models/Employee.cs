using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace BooksApi.Models
{
    public class Employee
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string name { get; set; }

        public string team { get; set; }

        public string designation { get; set; }

        public string salary { get; set; }

        public string addedtime { get; set; }


    }
}