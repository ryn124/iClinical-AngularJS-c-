using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using iClinical;
using System.ComponentModel.DataAnnotations;

namespace iClinical.Model
{
  public class Study
  {
    [Key]
    public string Id { get; set; }
    public string StudyTitle { get; set; }
    public string BriefSummary { get; set; }
    public string  Gender{ get; set; }
    // public string Status { get; set; }
    public int SampleSize { get; set; }
  }
}