<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210713230024 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agents ADD agent_specialties_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE agents ADD CONSTRAINT FK_9596AB6EB6A5D0EA FOREIGN KEY (agent_specialties_id) REFERENCES specialties (id)');
        $this->addSql('CREATE INDEX IDX_9596AB6EB6A5D0EA ON agents (agent_specialties_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE agents DROP FOREIGN KEY FK_9596AB6EB6A5D0EA');
        $this->addSql('DROP INDEX IDX_9596AB6EB6A5D0EA ON agents');
        $this->addSql('ALTER TABLE agents DROP agent_specialties_id');
    }
}
