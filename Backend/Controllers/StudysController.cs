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
    public class Studies : Controller
    {
        private readonly iClinicalContext _context;
        public Studies (iClinicalContext context)
        {
            _context = context;
            if (_context.Studies.Count () == 0)
            {
                _context.Studies.Add (new Study ()
                {
                    Id = 1, StudyTitle = "Lung Cancer Research Decisions", BriefSummary = "A study for Lung Cancer Patients that need to make the decision of treatment and research.", Gender = "Both", MinAge= 25, MaxAge= 65, Location = "United States", Status = "recruiting", SampleSize = 15, CompanyId = 1});
                _context.Studies.Add (new Study ()
                {
                    Id = 2, StudyTitle = "Osteoperosis in Women under 23", BriefSummary = "A bone study that recruits young women for a possible cure of Osteoperosis at a young age", Gender = "Female", MinAge= 0, MaxAge= 23, Location = "United States", Status = "not_recruiting", SampleSize = 100, CompanyId = 2});
                _context.Studies.Add (new Study ()
                {
                    Id = 3, StudyTitle = "Testicular Cancer in Men with Animal Besties", BriefSummary = "A study that contiunes research in older men that have testicular cancer and beleive the cure can be an animal companion.", Gender = "Male", MinAge= 45, MaxAge = 90, Location = "United Kingdom", Status = "recruiting", SampleSize = 200, CompanyId = 3});
                _context.SaveChanges ();
            }
        }
        // GET api/values
        [HttpGet]
        public List<Study> Get ()
        {
            return _context.Studies.ToList ();
        }

        // GET api/values/5
        [HttpGet ("{id}")]
        public Study Get (int id)
        {
            foreach (Study s in _context.Studies)
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
            _context.Studies.Add (s);
            _context.SaveChanges ();
            return s;
        }

        // PUT api/values/5
        [HttpPut ("{id}")]
        public Study Put (int id, [FromBody] Study Study)
        {

            foreach (Study s in _context.Studies)
            {
                if (s.Id == id)
                {
                    _context.Studies.Remove (s);
                    _context.SaveChanges ();
                    _context.Studies.Add (Study);
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
            foreach (Study s in _context.Studies)
            {
                if (s.Id == id)
                {
                    _context.Studies.Remove (s);
                    _context.SaveChanges ();
                    return "deleted";

                }
            }

            return "not found";
        }
    }
}