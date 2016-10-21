var i = 0;
var wordCount;
var paragraphCount;
var wordsInSentenceCount = 4;
var sentencesInParagraphCount = 4;
var item;
var loremIpsum = "";
var terms = [
  'credit',
  'debit',
  'annual percentage rate (APR)',
  'credit report',
  'credit score',
  'creditor',
  'debt',
  'debt avalanche',
  'debt snowball',
  'fixed interest rate',
  'home equity',
  'home equity line of credit (HELOC)',
  'interest rate',
  'mortgage',
  'principal',
  'refinance',
  'secured debt',
  'variable interest rate',
  'insurance',
  'auto insurance bodily injury liability coverage',
  'auto insurance collision coverage' ,
  'auto insurance comprehensive coverage',
  'auto insurance property damage liability',
  'condo unit owner\'s insurance',
  'deductible',
  'disability insurance',
  'homeowner\'s insurance',
  'insurance',
  'insurance claim',
  'liability coverage',
  'life insurance',
  'permanent life insurance',
  'whole life insurance',
  'universal life insurance',
  'variable universal life insurance',
  'term life insurance',
  'renter\'s insurance',
  'investing',
  'retirement',
  'asset allocation',
  'asset classes',
  'bonds',
  'capital gains',
  'compound interest',
  'diversification',
  'dividend',
  'exchange traded funds (ETFs)',
  'expense ratio',
  'index fund',
  'inflation',
  'load',
  'mutual funds',
  'prospectus',
  'rate of return',
  'risk tolerance',
  'stocks',
  'target date fund',
  'tax-deferred',
  'tax-free',
  'taxes',
  '401k',
  '403b',
  'employer plan',
  'adjusted gross income',
  'credits',
  'flexible spending account (FSA)',
  'exemption',
  'form 1040',
  'form 1099',
  'gross income',
  'health savings account (HSA)',
  'itemized deductions',
  'Roth IRA',
  'schedule C',
  'standard deduction',
  'taxable income',
  'traditional IRA',
  'W-2',
  'W-4',
  'trust',
  'will',
  'agent',
  'estate',
  'estate (or probate) administration',
  'estate plan/estate planning',
  'intestate',
  'personal representative',
  'probate',
  'statutory',
  'testamentary',
  'trust',
  'trustee',
  'trustor',
  'will',
  'student loans',
  'capitalized interest',
  'deferment',
  'federal loan',
  'forbearance',
  'Perkins loan',
  'private loan',
  'simple interest',
  'Stafford/Direct Loan',
  'student loan consolidation',
  'student loan refinance',
  'subsidized',
  'unsubsidized',
  'retirement',
  '401k/403b',
  'asset allocation',
  'compound interest',
  'diversification',
  'pension',
  'Roth IRA',
  'SEP IRA',
  'simple IRA (SRA)',
  'social security',
  'target date fund',
  'tax-deferred',
  'tax-free',
  'traditional IRA',
  'homebuying',
  'adjustable rate mortgage (ARM)',
  'closing costs',
  'down payment',
  'earnest money',
  'escrow',
  'FHA Loan',
  'fixed-rate mortgage',
  'home inspection',
  'jumbo loan',
  'Loan to Value (LTV)',
  'Private Mortgage Insurance (PMI)',
  'moolah',
  'benjamins',
  'bling bling',
  'cash money'
];

function setCounts() {
  $("#cash").removeClass("active").addClass("inactive");
  paragraphCount = $(".paragraph-count").val();
  wordCount = wordsInSentenceCount * sentencesInParagraphCount;
};

function selectRandomTerm() {
  var randomIndex =  Math.floor(Math.random() * terms.length);
  return terms[randomIndex];
};

function makeIpsum() {
  $("#cash").removeClass("inactive").addClass("active");
  $(".lorem").html('<p class="ipsum"></p>');

  for (i = 0; i < paragraphCount; i++) {
    for (num = 0; num < wordCount; num++) {
      term = selectRandomTerm();
      if (num === 0 || num % 4 === 0) {
        firstLetter = term.charAt(0).toUpperCase();
        term = firstLetter + term.slice(1);
        loremIpsum += term + ' ';
      } else if (num === 3 || num % 4 === 3) {
        loremIpsum += term + '. ';
      } else {
        loremIpsum += term + ' ';
      }
    }
    $(".ipsum:last").clone().appendTo(".lorem");
    $(".ipsum:last").prev().hide().text(loremIpsum).slideDown();
    loremIpsum = '';
  }
}

$(document).ready(function(){
  setCounts();
  $(".paragraph-count").on("change", setCounts);
	$("#suitcase").on("click", makeIpsum);
});
