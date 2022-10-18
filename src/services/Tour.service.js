import http from "./common";

export class TourService {
  getTours() {
    return http.get("/tours");
  }

  getTourById(id) {
    return http.get(`/tours/${id}`);
  }

  getTourByPackageId(packageId) {
    return http.get(`/tours/?packageId=${packageId}`);
  }
}
