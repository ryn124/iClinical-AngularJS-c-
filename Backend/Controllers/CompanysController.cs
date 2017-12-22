using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iClinical;
using iClinical.Model;
using Microsoft.AspNetCore.Mvc;

namespace iClinical.Controllers
{
    [Route ("api/companies")]
    public class CompanysController : Controller
    {
        private readonly iClinicalContext _context;
        public CompanysController (iClinicalContext context)
        {
            _context = context;
            if (_context.Companys.Count () == 0)
            {
                _context.Companys.Add (new Company ()
                {
                    Id = 1, CompanyName = "Alternative Studes INC", CompanyUserName = "ALTMEDINC", CompanyPassword = "iclinical", Phone = "7145555555", Desciption = "We are Alternative Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.",
                        Studies = "", Email = "ALTMEDINC@iclinical.com", City = "Santa Ana"
                });
                _context.Companys.Add (new Company ()
                {
                    Id = 2, CompanyName = "Nutrition Studes INC", CompanyUserName = "NutriStudies", CompanyPassword = "iclinical", Phone = "7143333333", Desciption = "We are Nutri Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.",
                        Studies = "", Email = "NUTMEDINC@iclinical.com", City = "Los Angeles"
                });
                _context.Companys.Add (new Company ()
                {
                    Id = 3, CompanyName = "HealthAmerica Studes INC", CompanyUserName = "HELLAM", CompanyPassword = "iclinical", Phone = "3234444444", Desciption = "We are HealthAmerica Studies INC. We collectivley research hundreds on new studies daily. Thank you for your intrest in our Company.", Studies = "", Email = "HellAM@iclinical.com", City = "New York"
                });
        _context.SaveChanges ();
    }
}
// GET api/values
[HttpGet]
public List<Company> Get ()
{
    return _context.Companys.ToList ();
}

// GET api/values/5
[HttpGet ("{id}")]
public Company Get (int id)
{
    foreach (Company s in _context.Companys)
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
public Company Post ([FromBody] Company s)
{
    _context.Companys.Add (s);
    _context.SaveChanges ();
    return s;
}

// PUT api/values/5
[HttpPut ("{id}")]
public Company Put (int id, [FromBody] Company Company)
{

    foreach (Company s in _context.Companys)
    {
        if (s.Id == id)
        {
            _context.Companys.Remove (s);
            _context.SaveChanges ();
            _context.Companys.Add (Company);
            _context.SaveChanges ();
            return Company;
        }
    }

    return null;
}

// DELETE api/values/5
[HttpDelete ("{id}")]
public string Delete (int id)
{
    foreach (Company s in _context.Companys)
    {
        if (s.Id == id)
        {
            _context.Companys.Remove (s);
            _context.SaveChanges ();
            return "deleted";

        }
    }

    return "not found";
}
}
}