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
   * assume only one single constructor right now (being a single string array
   * with all data), and depending on the mileage we might take another route.
   */
  constructor(metricData: Array<string>) {
    this.microservice = metricData[0];
    this.date = new Date(+metricData[1]);
    this.metric = metricData[2];
    this.value = +metricData[3];
  }

}
