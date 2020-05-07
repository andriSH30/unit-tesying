import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });

  it('berhasil memanggil changeMessage melalui aksi klik', () => {
    const msgExpected = 'Sebuah pesan'
    const msgAfterChangeExpected = 'Sebuah pesan baru'
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.find('.message')).toBe(msgExpected)

    // memanggil method changeMessage lewat aksi klik
    const buttonElemen = wrapper.find('.btn')
    buttonElemen.trigger('click')

    // mengecek perubahan setelah klik
    expect(wrapper.find('.message')).toBe(msgAfterChangeExpected)
  })
});
