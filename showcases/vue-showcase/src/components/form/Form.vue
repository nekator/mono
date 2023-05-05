<script setup lang="ts">
import {
	DBButton,
	DBInput,
	DBRadio,
	DBTag
} from "../../../../../output/vue/vue3/src";

import { ref } from "vue";
const input = ref("");
const radio = ref("");
const tags = ref<string[]>([]);

const array = ["X", "Y", "Z"];

const dataList = [{ key: "test", value: "Test" }, { key: "test2" }];

const changeTags = (tag: string) => {
	if (tags.value.includes(tag)) {
		tags.value = tags.value.filter((t) => t !== tag);
	} else {
		tags.value = [...tags.value, tag];
	}
};

// eslint-disable-next-line no-alert
const logAll = () => {
	alert(
		JSON.stringify({
			input: input.value,
			radio: radio.value,
			tags: tags.value
		})
	);
};
</script>

<template>
	<div class="form-container">
		<div>
			<form>
				<fieldset>
					<p>Input:</p>
					<DBInput
						label="Textinput"
						placeholder="Placeholder"
						description="Description"
						icon="account"
						name="input-name"
						class="fullWidth"
						:dataList="dataList"
						v-model:value="input"
					/>
					<p>Radio:</p>
					<ul>
						<li v-for="radioName in array">
							<DBRadio
								@change="radio = radioName"
								name="radio-group"
								>Radio {{ radioName }}</DBRadio
							>
						</li>
					</ul>
					<p>Tags:</p>
					<ul>
						<li v-for="(tag, index) in array">
							<DBTag
								:variant="
									index === 0 ? undefined : 'successful'
								"
								@Change="changeTags(tag)"
								:strong="index === 2"
								:interactive="true"
								>Tag {{ tag }}</DBTag
							>
						</li>
					</ul>
					<p>Button:</p>
					<DBButton type="button" variant="primary" @click="logAll()">
						Hi from Showcase!
					</DBButton>
				</fieldset>
			</form>
		</div>
		<div>
			<h2>Output</h2>
			<dl>
				<dt>inputs value</dt>
				<dd>{{ input ? input : "No Input set" }}</dd>
			</dl>
			<dl>
				<dt>radio value</dt>
				<dd>{{ radio ? radio : "No radio set" }}</dd>
			</dl>
			<dl>
				<dt>tags value</dt>
				<dd>{{ JSON.stringify(tags) }}</dd>
			</dl>
		</div>
	</div>
</template>
