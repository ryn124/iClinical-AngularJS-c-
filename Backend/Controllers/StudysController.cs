using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iClinical;
using iClinical.Model;
using Microsoft.AspNetCore.Mvc;

namespace iClinical.Controllers
{
    [Route ("api/studies")]
    public class StudysController : Controller
    {
        private readonly iClinicalContext _context;
        public StudysController (iClinicalContext context)
        {
            _context = context;
            if (_context.Studys.Count () == 0)
            {
                _context.Studys.Add (new Study ()
                {
                    Id = 1, StudyTitle = "Lung Cancer Research Decisions", Summary = "A study for Lung Cancer Patients that need to make the decision of treatment and research.", Gender = "Both", MinAge= 25, MaxAge=65, Status= "Recuiting", City = "Texas"
                });
                _context.Studys.Add (new Study ()
                {
                    Id = 2, StudyTitle = "Osteoperosis in Women under 23", Summary = "A bone study that recruits young women for a possible cure of Osteoperosis at a young age", Gender = "Female", MinAge= 0, MaxAge=23, Status= "Recuiting", City = "LA"
                });
                _context.Studys.Add (new Study ()
                {
                    Id = 3, StudyTitle = "Testicular Cancer in Men with Animal Besties", Summary = "A study that contiunes research in older men that have testicular cancer and beleive the cure can be an animal companion.", Gender = "Male", MinAge= 45, MaxAge=90, Status= "Recuiting", City = "NY"
                });
                _context.SaveChanges ();
            }
        }
        // GET api/values
        [HttpGet]
        public List<Study> Get ()
        {
            return _context.Studys.ToList ();
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public Study Get (int id)
        {
            foreach (Study s in _context.Studys)
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
        public Study Post ([FromBody] Study s)
        {
            _context.Studys.Add (s);
            _context.SaveChanges ();
            return s;
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public Study Put (int id, [FromBody] Study Study)
        {

            foreach (Study s in _context.Studys)
            {
                if (s.Id == id)
                {
                    _context.Studys.Remove (s);
                    _context.SaveChanges ();
                    _context.Studys.Add (Study);
                    _context.SaveChanges ();
                    return Study;
                }
            }

            return null;
        }

        // DELETE api/values/5
        [HttpDelete ("{id}")]
        public string Delete (int id)
        {
            foreach (Study s in _context.Studys)
            {
                if (s.Id == id)
                {
                    _context.Studys.Remove (s);
                    _context.SaveChanges ();
                    return "deleted";

                }
            }

            return "not found";
        }
    }
}