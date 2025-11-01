if (typeof (globalThis as any).WeakRef === "undefined") {
  class FakeWeakRef<T extends object> {
    private value: T;
    constructor(value: T) {
      this.value = value;
    }
    deref() {
      return this.value;
    }
  }
  ;(globalThis as any).WeakRef = FakeWeakRef;
  console.warn("⚠️ WeakRef not supported – using fake polyfill for local dev");
}
