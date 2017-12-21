using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iClinical;
using iClinical.Model;
using Microsoft.AspNetCore.Mvc;

namespace iClinical.Controllers
{
    [Route ("api/user")]
    public class UsersController : Controller
    {
        private readonly iClinicalContext _context;
        public UsersController (iClinicalContext context)
        {
            _context = context;
            if (_context.Users.Count () == 0)
            {
                _context.Users.Add (new User ()
                {
                    Id = 1, Name = "Harrison Spain", Email = "harry@iclinical.com", Password = "iclinical", Gender = "Male", Location = "Los Angeles", Blood = false, Cancer = false, Cardiovascular = false, Congenital = false, Ear = false, Eye = false, Infection = false, Inflammatory = false, Injuries = false, MentalHealth = false, Metabolic = false, Musculoskeletal = false, Neurological = false, OralGastro = false, Renal = false, Reproduction = false, Respiratory = false, Skin = false, Stroke = false, Generic = false, Other = "None", IsObese = false, IsSedentary = false, HasPoorDiet = false, IsSmoker = false, IsDrinker = false, HasHighBloodPressure = false, HasHighCholesterol = false
                });
                _context.Users.Add (new User ()
                {
                    Id = 2, Name = "Billy Pruden", Email = "bill@iclinical.com", Password = "iclinical", Gender = "Male", Location = "Texas", Blood = false, Cancer = false, Cardiovascular = false, Congenital = false, Ear = false, Eye = false, Infection = false, Inflammatory = false, Injuries = false, MentalHealth = false, Metabolic = false, Musculoskeletal = false, Neurological = false, OralGastro = false, Renal = false, Reproduction = false, Respiratory = false, Skin = false, Stroke = false, Generic = false, Other = "None", IsObese = false, IsSedentary = false, HasPoorDiet = false, IsSmoker = false, IsDrinker = false, HasHighBloodPressure = false, HasHighCholesterol = false
                });
                _context.Users.Add (new User ()
                {
                    Id = 3, Name = "Taylor Thomas", Email = "taytay@iclinical.com", Password = "iclinical", Gender = "Male", Location = "New York", Blood = false, Cancer = false, Cardiovascular = false, Congenital = false, Ear = false, Eye = false, Infection = false, Inflammatory = false, Injuries = false, MentalHealth = false, Metabolic = false, Musculoskeletal = false, Neurological = false, OralGastro = false, Renal = false, Reproduction = false, Respiratory = false, Skin = false, Stroke = false, Generic = false, Other = "None", IsObese = false, IsSedentary = false, HasPoorDiet = false, IsSmoker = false, IsDrinker = false, HasHighBloodPressure = false, HasHighCholesterol = false
                });
                _context.SaveChanges ();
            }
        }
        // GET api/values
        [HttpGet]
        public List<User> Get ()
        {
            return _context.Users.ToList ();
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public User Get (int id)
        {
            foreach (User s in _context.Users)
            {
                if (s.Id == id)
                {
                    return s;
                }
            }
            return null;

        }

        // POST api/values
        [HttpPost]
        public User Post ([FromBody] User s)
        {
            _context.Users.Add (s);
            _context.SaveChanges ();
            return s;
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public User Put (int id, [FromBody] User user)
        {

            foreach (User s in _context.Users)
            {
                if (s.Id == id)
                {
                    _context.Users.Remove (s);
                    _context.SaveChanges ();
                    _context.Users.Add (user);
                    _context.SaveChanges ();
                    return user;
                }
            }

            return null;
        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public string Delete (int id)
        {
            foreach (User s in _context.Users)
            {
                if (s.Id == id)
                {
                    _context.Users.Remove (s);
                    _context.SaveChanges ();
                    return "deleted";

                }
            }

            return "not found";
        }
    }
}