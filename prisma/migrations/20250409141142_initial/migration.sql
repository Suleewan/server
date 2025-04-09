-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "name" TEXT,
    "picture" TEXT,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reporters" (
    "id" SERIAL NOT NULL,
    "fullname" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "subdistrict" TEXT NOT NULL,
    "village" TEXT NOT NULL,

    CONSTRAINT "Reporters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roade_issues" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "sub_issue" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" TEXT NOT NULL,
    "resolution_detail" TEXT,
    "update_at" TIMESTAMP(3) NOT NULL,
    "severity" INTEGER NOT NULL,
    "affected_people" INTEGER NOT NULL,
    "urgency" INTEGER NOT NULL,
    "economic_impact" INTEGER NOT NULL,
    "total_score" DECIMAL(65,30) NOT NULL,
    "resolved_a" TIMESTAMP(3),

    CONSTRAINT "Roade_issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Drainag_issues" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "sub_issue" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" TEXT NOT NULL,
    "resolution_detail" TEXT,
    "update_at" TIMESTAMP(3) NOT NULL,
    "severity" INTEGER NOT NULL,
    "affected_people" INTEGER NOT NULL,
    "urgency" INTEGER NOT NULL,
    "economic_impact" INTEGER NOT NULL,
    "total_score" DECIMAL(65,30) NOT NULL,
    "resolved_a" TIMESTAMP(3),

    CONSTRAINT "Drainag_issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Electricity_issues" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "sub_issue" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" TEXT NOT NULL,
    "resolution_detail" TEXT,
    "update_at" TIMESTAMP(3) NOT NULL,
    "severity" INTEGER NOT NULL,
    "affected_people" INTEGER NOT NULL,
    "urgency" INTEGER NOT NULL,
    "economic_impact" INTEGER NOT NULL,
    "total_score" DECIMAL(65,30) NOT NULL,
    "resolved_a" TIMESTAMP(3),

    CONSTRAINT "Electricity_issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Water_issues" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "sub_issue" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" TEXT NOT NULL,
    "resolution_detail" TEXT,
    "update_at" TIMESTAMP(3) NOT NULL,
    "severity" INTEGER NOT NULL,
    "affected_people" INTEGER NOT NULL,
    "urgency" INTEGER NOT NULL,
    "economic_impact" INTEGER NOT NULL,
    "total_score" DECIMAL(65,30) NOT NULL,
    "resolved_a" TIMESTAMP(3),

    CONSTRAINT "Water_issues_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Health_issues" (
    "id" SERIAL NOT NULL,
    "report_id" INTEGER NOT NULL,
    "sub_issue" TEXT NOT NULL,
    "description" TEXT,
    "image_url" TEXT,
    "status" TEXT NOT NULL,
    "resolution_detail" TEXT,
    "update_at" TIMESTAMP(3) NOT NULL,
    "severity" INTEGER NOT NULL,
    "affected_people" INTEGER NOT NULL,
    "urgency" INTEGER NOT NULL,
    "economic_impact" INTEGER NOT NULL,
    "total_score" DECIMAL(65,30) NOT NULL,
    "resolved_a" TIMESTAMP(3),

    CONSTRAINT "Health_issues_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Roade_issues" ADD CONSTRAINT "Roade_issues_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "Reporters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drainag_issues" ADD CONSTRAINT "Drainag_issues_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "Reporters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Electricity_issues" ADD CONSTRAINT "Electricity_issues_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "Reporters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Water_issues" ADD CONSTRAINT "Water_issues_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "Reporters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Health_issues" ADD CONSTRAINT "Health_issues_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "Reporters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
