export const PRIVATE_ROUTES = {
  STUDIO: '/studio',

  get SETTINGS() {
    return `${this.STUDIO}/settings`
  },

  get UPLOAD_VIDEO() {
    return `${this.STUDIO}/upload`
  }
}
