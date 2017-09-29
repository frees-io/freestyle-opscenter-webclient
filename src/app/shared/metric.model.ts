/**
 * Metric model considering this metric content served from backend:
 * s"$microservice $date $metric $value"
 */
export class Metric {

  public microservice: string;
  public date: Date;
  public metric: string;
  public value: number;

  /**
   * As TypeScript relies heavily on its JS structures under the hood,
   * it doesn't support multiple constructors or operator overloading.
   * So here we could take an approximate approach by using optional
   * parameters and/or using interfaces.
   *
   * For the sake of brevity and simplicity of this model we are gonna
   * assume only one single constructor right now
   * (̶b̶e̶i̶n̶g̶ ̶a̶ ̶s̶i̶n̶g̶l̶e̶ ̶s̶t̶r̶i̶n̶g̶ ̶a̶r̶r̶a̶y̶ ̶w̶i̶t̶h̶ ̶a̶l̶l̶ ̶d̶a̶t̶a̶)̶,
   * (being the four parameters of the model),
   * and depending on the mileage we might take another route.
   */
  // constructor(metricData: Array<string>) {
  //   this.microservice = metricData[0];
  //   this.date = new Date(+metricData[1]);
  //   this.metric = metricData[2];
  //   this.value = +metricData[3];
  // }

  constructor(microservice?: string, date?: string, metric?: string, value?: string) {
    this.microservice = microservice;
    this.date = new Date(+date);
    this.metric = metric;
    this.value = +value;
  }

}
