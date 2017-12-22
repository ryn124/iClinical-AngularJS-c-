using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iClinical;

namespace iClinical.Model
{
  public class Study
  {
    public int Id { get; set; }
    public string StudyTitle { get; set; }
    public string Summary { get; set; }
    public string Status { get; set; }
    public string City { get; set; }
  }
}