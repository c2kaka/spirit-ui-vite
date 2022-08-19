import Button from "../Button";

import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

describe('Button', () => {
    test("mount  @vue/test-utils", () => {
        // @vue/test-utils
        const wrapper = shallowMount(Button, {
            slots: {
                default: 'Button'
            }
        });

        // 断言
        expect(wrapper.text()).toBe("Button");
    });
})

test("red", () => {
    const wrapper = shallowMount(Button, {
        slots: {
            default: 'Button'
        },
        props: {
            color: 'red'
        }
    });
    expect(wrapper.classes().includes('bg-red-500')).toBe(true)
});
