<template>
  <div>
    <Upload type="drag" :before-upload="handleUpload" action="后端服务地址/upload">
      <Button class="sele_file_b"><i class="sele_file_icon_b"></i>选择文件</Button>
    </Upload>
    <div class="file_detail_b" v-if="formValidate.file !== null">
      <Table class="fileTab" :data="flieList" :columns="fileColumns" stripe disabled-hover>
        <template slot-scope="{ row }" slot="action">
          <div class="study-btn">
            <span @click="deleteFile(row)"
              ><i class="delete_file_icon_b"></i
            ></span>
          </div>
        </template>
      </Table>
      <div class="file_btn_con_b">
        <div v-if="uploadStatus">
          <div class="progress_con_b">
            <Progress :percent="progressBar" stroke-color="#22be4e"></Progress>
          </div>
          <div class="upload_speed_b">
            <span class="speed_b">{{ speed }}</span>
            <span>{{ this.flieList[0].size }}</span>
          </div>
        </div>
        <Button class="file_btn_b" type="text" @click="upload" :loading="loadingStatus" >{{ loadingStatus ? "停止上传" : "开始上传" }}</Button>
      </div>
    </div>
  </div>
</template>

<script>
// import { uploadFile } from '@/api/mirror'
import axios from "axios";
export default {
  data() {
    return {
      speed: "",
      formValidate: {
        mirror_name: "",
        sys_type: 0,
        rule_type: "",
        file: null,
      },
      loadingStatus: false,
      uploadStatus: false,
      flieList: [{ name: "", upload_status: "等待上传", size: 0 }],
      fileColumns: [
        { title: "文件名", key: "name", width: 150, tooltip: true },
        {
          title: "上传状态",
          key: "upload_status",
          render: (h, params) => {
            if (params.row.upload_status !== "等待上传") {
              return h("div", [
                h(
                  "span",
                  {
                    style: {
                      color: "#22be4e",
                    },
                  },
                  params.row.upload_status
                ),
              ]);
            } else {
              return h("div", [h("span", params.row.upload_status)]);
            }
          },
        },
        { title: "文件大小", key: "size" },
        { title: "操作", width: 80, slot: "action", key: "handle" },
      ],
      progressBar: 0,
    };
  },
  methods: {
    handleUpload(file) {
      this.formValidate.file = file;
      this.flieList[0].name = file.name;
      if (file.size / 1024 < 1024) {
        this.flieList[0].size = (file.size / 1024).toFixed(2) + "KB";
      } else if (file.size / 1024 / 1024 < 1024) {
        this.flieList[0].size = (file.size / 1024 / 1024).toFixed(2) + "M";
      } else {
        this.flieList[0].size =
          (file.size / 1024 / 1024 / 1024).toFixed(2) + "G";
      }
      return false;
    },
    upload() {
      this.loadingStatus = true;
      this.uploadStatus = true;
      const formData = new FormData();
      formData.append("file", this.formValidate.file);
      let t0 = new Date();
      axios.post("后端服务地址/upload", formData, {
        onUploadProgress: (progressEvent) => {
          var percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          this.progressBar = percentCompleted;
          this.flieList[0].upload_status = this.progressBar + "%";
          let t1 = new Date();
          // console.log(t1 - t0);
          // 计算出当前上传为多少kb/s
          let s = Math.round(
            progressEvent.loaded / 1024 / ((t1 - t0) / 1000)
          );
          if (s > 1024) {
            this.speed = (s / 1024).toFixed(2) + "M/s";
          } else {
            this.speed = s + "kb/s";
          }
				}}
			).then((res) => {
        this.speed = "";
        this.loadingStatus = false;
      });
		},
		deleteFile() {
			
		}
  }
};
</script>
